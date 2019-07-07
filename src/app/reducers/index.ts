import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import {environment} from '../../environments/environment';
import * as fromProjects from '../store/reducers/projects.reducer';

export interface State {
  router: RouterReducerState;
  projects: fromProjects.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  projects: fromProjects.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
