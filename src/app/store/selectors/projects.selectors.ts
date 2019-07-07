import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromProjects from '../reducers/projects.reducer';

export const selectFeature = createFeatureSelector<fromProjects.State>('projects');

export const selectProjects = createSelector(
  selectFeature,
  (state: fromProjects.State) => state.projects
);

export const selectErrors = createSelector(
  selectFeature,
  (state: fromProjects.State) => state.errors
);
