import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromCategories from '@store/reducers/categories.reducer';
import {CategoryInterface} from '@interfaces/category';
import {selectCategories} from '@store/selectors/categories.selectors';
import {tap} from 'rxjs/operators';
import {LoadCategories} from '@store/actions/categories.actions';
import {Icons} from '@enums/icons';
import {PageType} from '@enums/pages';
import {DialogType} from '@enums/dialog';

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

  constructor(private store: Store<fromCategories.State>) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.store.pipe(
      select(selectCategories),
      tap((categories: CategoryInterface[]) => !categories && this.fetchCategories())
    );
  }

  fetchCategories() {
    this.store.dispatch(new LoadCategories());
  }

}
