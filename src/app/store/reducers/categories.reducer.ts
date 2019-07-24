import {HttpErrorResponse} from '@angular/common/http';

import {CategoryInterface} from '@interfaces/category';
import {ActionTypes} from '@store/actions/categories.actions';
import {CategoriesActions} from '@store/actions/categories.actions';

export interface State {
  categories: CategoryInterface[];
  errors: HttpErrorResponse;
}

export const initialState: State = {
  categories: undefined,
  errors: undefined
};

export function reducer(state: State = initialState, action: CategoriesActions) {
  switch (action.type) {
    case ActionTypes.LoadedCategories:
      return {...state, categories: action.payload};
    case ActionTypes.CategoriesErrors:
      return {...state, errors: action.payload};
    default:
      return state;
  }
}
