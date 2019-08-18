import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';

import * as fromCategories from '@store/reducers/categories.reducer';
import {CategoryInterface} from '@interfaces/category';
import {selectCategories} from '@store/selectors/categories.selectors';
import {tap} from 'rxjs/operators';
import {CreateCategory, DeleteCategory, LoadCategories, UpdateCategory} from '@store/actions/categories.actions';
import {Icons} from '@enums/icons';
import {PageType} from '@enums/pages';
import {DialogType} from '@enums/dialog';
import {DialogComponent} from '@shared/components/form-dialog/dialog.component';
import {DialogService} from '@shared/services/dialog.service';
import {emptyCategory} from '@mocks/form.mocks';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public icons = Icons;
  public pageTypes = PageType;
  public dialogTypes = DialogType;
  public categories$: Observable<CategoryInterface[]>;
  public emptyCategory: CategoryInterface = emptyCategory;

  constructor(private store: Store<fromCategories.State>,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.store.pipe(
      select(selectCategories),
      tap((categories: CategoryInterface[]) => {
        if (!categories) {
          return this.fetchCategories();
        }
      })
    );
  }

  fetchCategories() {
    this.store.dispatch(new LoadCategories());
  }

  onInitDialog(dialogType: string, object?: CategoryInterface) {
    const dialogRef = this.dialogService.openDialog(DialogComponent, {
      object,
      dialogType,
      pageType: this.pageTypes.CATEGORY
    });
    this.handleDialogData(dialogRef, object.id);
  }

  handleDialogData(dialogRef: any, categoryId?: string) {
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.resultCase(result, categoryId);
    });
  }

  resultCase(result: { formValue: CategoryInterface, dialogType: string }, categoryId: string) {
    switch (result.dialogType) {
      case this.dialogTypes.CREATE:
        return this.createCategory(result.formValue);
      case this.dialogTypes.UPDATE:
        return this.updateCategory(result.formValue, categoryId);
      case this.dialogTypes.DELETE:
        return this.deleteCategory(categoryId);
    }
  }

  createCategory(category: CategoryInterface) {
    this.store.dispatch(new CreateCategory(category));
  }

  updateCategory(category: CategoryInterface, categoryId: string) {
    category.id = categoryId;
    this.store.dispatch(new UpdateCategory(category));
  }

  deleteCategory(categoryId: string) {
    this.store.dispatch(new DeleteCategory(categoryId));
  }

  goToCategoryDetails(categoryId: string) {
    this.router.navigate(['/', 'categories', categoryId]);
  }

}
