import {Action} from '@ngrx/store';

import {CategoryInterface} from '@interfaces/category';
import {WorksInterface} from '@interfaces/work';

export enum ActionTypes {
  LoadCategories = '[Categories Page] Load Categories',
  LoadedCategories = '[Categories Page] Loaded Categories',
  CategoriesErrors = '[Categories Page] Categories Errors',
  CreateCategory = '[Categories Page] Create Category',
  DeleteCategory = '[Categories Page] Delete Category',
  UpdateCategory = '[Categories Page] Update Category',
  LoadWorksByCategory = '[Category Details Page] Load Works By Categories',
  LoadedWorksByCategory = '[Category Details Page] Loaded Works By Categories',
  CreateCategoryWork = '[Category Details Page] Create Category Work'
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

export class CreateCategory implements Action {
  readonly type = ActionTypes.CreateCategory;

  constructor(public payload: CategoryInterface) {
  }
}

export class UpdateCategory implements Action {
  readonly type = ActionTypes.UpdateCategory;

  constructor(public payload: CategoryInterface) {
  }
}

export class DeleteCategory implements Action {
  readonly type = ActionTypes.DeleteCategory;

  constructor(public payload: string) {
  }
}

export class LoadWorksByCategory implements Action {
  readonly type = ActionTypes.LoadWorksByCategory;

  constructor(public payload: string) {
  }
}

export class LoadedWorksByCategory implements Action {
  readonly type = ActionTypes.LoadedWorksByCategory;

  constructor(public payload: WorksInterface[]) {
  }
}

export class CreateCategoryWork implements Action {
  readonly type = ActionTypes.CreateCategoryWork;

  constructor(public payload: {categoryId: string, work: WorksInterface}) {
  }
}

export type CategoriesActions =
  LoadCategories & LoadedCategories &
  CategoriesErrors & CreateCategory &
  LoadWorksByCategory & LoadedWorksByCategory &
  UpdateCategory & DeleteCategory & CreateCategoryWork;
