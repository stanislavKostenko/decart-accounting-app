import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromCategories from '@store/actions/categories.actions';
import {SharedService} from '@shared/services/shared.service';
import {MessageService} from '@shared/services/message.service';
import {CategoriesService} from '../../modules/categories/categories.service';
import {CategoryInterface} from '@interfaces/category';

@Injectable()
export class CategoriesEffects {
  constructor(private actions$: Actions,
              private projectsService: CategoriesService,
              private store: Store<any>,
              private sharedService: SharedService,
              private messageService: MessageService) {
  }

  @Effect()
  loadCategories$ = this.actions$.pipe(
    ofType(fromCategories.ActionTypes.LoadCategories),
    mergeMap(() => this.projectsService.getCategories().pipe(
      map((projects: CategoryInterface[]) => new fromCategories.LoadedCategories(projects)),
      catchError((error: HttpErrorResponse) => of(new fromCategories.CategoriesErrors(error)))
    ))
  );
}
