import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import {environment} from '@env/environment';
import * as fromProjects from '../store/reducers/projects.reducer';
import * as fromCategories from '../store/reducers/categories.reducer';

export interface State {
  router: RouterReducerState;
  projects: fromProjects.State;
  categories: fromCategories.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  projects: fromProjects.reducer,
  categories: fromCategories.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
