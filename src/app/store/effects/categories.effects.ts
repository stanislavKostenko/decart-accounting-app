import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromCategories from '@store/actions/categories.actions';
import {LoadedCategories} from '@store/actions/categories.actions';
import {SharedService} from '@shared/services/shared.service';
import {MessageService} from '@shared/services/message.service';
import {CategoriesService} from '../../modules/categories/categories.service';
import {CategoryInterface} from '@interfaces/category';
import {selectCategories, selectWorks} from '@store/selectors/categories.selectors';
import {MessageItem, MessageType} from '@enums/message';
import {WorksInterface} from '@interfaces/work';

@Injectable()
export class CategoriesEffects {
  constructor(private actions$: Actions,
              private categoryService: CategoriesService,
              private store: Store<any>,
              private sharedService: SharedService,
              private messageService: MessageService) {
  }

  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.LoadCategories),
    exhaustMap(() => this.categoryService.getCategories().pipe(
      map((categories: CategoryInterface[]) => new fromCategories.LoadedCategories(categories)),
      catchError((error: HttpErrorResponse) => of(new fromCategories.CategoriesErrors(error)))
    ))
  );

  @Effect()
  createCategory$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.CreateCategory),
    withLatestFrom(this.store.pipe(select(selectCategories))),
    switchMap(([action, categories]: any) => this.categoryService.createCategory(action.payload)
      .pipe(
        map((category: CategoryInterface) => {
          if (category) {
            categories.push(category);
            const message = {type: MessageType.CREATE, item: MessageItem.CATEGORY};
            this.messageService.initSuccessToastr(message);
            return new LoadedCategories(categories);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.messageService.initErrorToastr(error);
          return of(new fromCategories.CategoriesErrors(error));
        })
      )
    ),
  );

  @Effect()
  updateCategory$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.UpdateCategory),
    withLatestFrom(this.store.pipe(select(selectCategories))),
    switchMap(([action, categories]: any) => this.categoryService.updateCategory(action.payload)
      .pipe(
        map((category: CategoryInterface) => {
          if (category) {
            categories = this.sharedService.mapArrayById(categories, category);
            const message = {type: MessageType.UPDATE, item: MessageItem.CATEGORY};
            this.messageService.initSuccessToastr(message);
            return new LoadedCategories(categories);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.messageService.initErrorToastr(error);
          return of(new fromCategories.CategoriesErrors(error));
        })
      )
    ),
  );

  @Effect()
  deleteCategory$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.DeleteCategory),
    withLatestFrom(this.store.pipe(select(selectCategories))),
    switchMap(([action, categories]: any) => this.categoryService.deleteCategory(action.payload)
      .pipe(
        map((response: any) => {
          if (response) {
            categories = this.sharedService.filterArrayById(categories, action.payload);
            const message = {type: MessageType.DELETE, item: MessageItem.CATEGORY};
            this.messageService.initSuccessToastr(message);
            return new LoadedCategories(categories);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.messageService.initErrorToastr(error);
          return of(new fromCategories.CategoriesErrors(error));
        })
      )
    ),
  );

  @Effect()
  loadWorksByCategory$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.LoadWorksByCategory),
    mergeMap((action: any) => this.categoryService.getCategoryWorks(action.payload).pipe(
      map((works: WorksInterface[]) => new fromCategories.LoadedWorksByCategory(works)),
      catchError((error: HttpErrorResponse) => {
        this.messageService.initErrorToastr(error);
        return of(new fromCategories.CategoriesErrors(error));
      })
    ))
  );

  @Effect()
  createCategoryWork$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.CreateCategoryWork),
    withLatestFrom(this.store.pipe(select(selectWorks))),
    switchMap(([action, works]: any[]) => {
      const {categoryId, work} = action.payload;
      return this.categoryService.createCategoryWork(categoryId, work).pipe(
        map((item: WorksInterface) => {
          works.push(item);
          const message = {type: MessageType.CREATE, item: MessageItem.CATEGORY};
          this.messageService.initSuccessToastr(message);
          return new fromCategories.LoadedWorksByCategory(works);
        }),
        catchError((error: HttpErrorResponse) => {
          this.messageService.initErrorToastr(error);
          return of(new fromCategories.CategoriesErrors(error));
        })
      );
    })
  );
}
