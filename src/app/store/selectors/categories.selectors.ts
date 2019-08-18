import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromCategories from '../reducers/categories.reducer';

export const selectFeature = createFeatureSelector<fromCategories.State>('categories');

export const selectCategories = createSelector(
  selectFeature,
  (state: fromCategories.State) => state.categories
);

export const selectWorks = createSelector(
  selectFeature,
  (state: fromCategories.State) => state.works
);

export const selectErrors = createSelector(
  selectFeature,
  (state: fromCategories.State) => state.errors
);
