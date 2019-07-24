import {ProjectInterface} from '@interfaces/project';
import {ActionTypes, ProjectsActions} from '../actions/projects.actions';
import {HttpErrorResponse} from '@angular/common/http';

export interface State {
  projects: ProjectInterface[];
  errors: HttpErrorResponse;
}

export const initialState: State = {
  projects: undefined,
  errors: undefined
};

export function reducer(state: State = initialState, action: ProjectsActions) {
  switch (action.type) {
    case ActionTypes.LoadedProjects:
      return {...state, projects: action.payload};
    case ActionTypes.ProjectsErrors:
      return {...state, errors: action.payload};
    default:
      return state;
  }
}
