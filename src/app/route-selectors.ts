import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';

export interface State {
  router: RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<State, RouterReducerState<any>>('router');

export const selectRouterState = createSelector(
  selectRouter,
  (state: RouterReducerState<any>) => state.state
);


