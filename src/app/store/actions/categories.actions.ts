import {Action} from '@ngrx/store';

import {CategoryInterface} from '@interfaces/category';

export enum ActionTypes {
  LoadCategories = '[Categories Page] Load Categories',
  LoadedCategories = '[Categories Page] Loaded Categories',
  CategoriesErrors = '[Categories Page] Categories Errors',
  CreateCategory = '[Categories Page] Create Category',
  DeleteCategory = '[Categories Page] Delete Category',
  UpdateCategory = '[Categories Page] Update Category',
}

export class LoadCategories implements Action {
  readonly type = ActionTypes.LoadCategories;
}

export class LoadedCategories implements Action {
  readonly type = ActionTypes.LoadedCategories;

  constructor(public payload: CategoryInterface[]) {
  }
}

export class CategoriesErrors implements Action {
  readonly type = ActionTypes.CategoriesErrors;

  constructor(public payload: any) {
  }
}

export type CategoriesActions =
  LoadCategories & LoadedCategories &
  CategoriesErrors;
