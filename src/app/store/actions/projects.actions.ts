import {Action} from '@ngrx/store';
import {Project} from '../../interfaces/project';
import {HttpErrorResponse} from '@angular/common/http';

export enum ActionTypes {
  LoadProjects = '[Projects Page] Load Projects',
  LoadedProjects = '[Projects Page] Loaded Projects',
  ProjectsErrors = '[Projects Page] Projects Errors'
}

export class LoadProjects implements Action {
  readonly type = ActionTypes.LoadProjects;
}

export class LoadedProjects implements Action {
  readonly type = ActionTypes.LoadedProjects;

  constructor(public payload: Project[]) {
  }
}

export class ProjectsErrors implements Action {
  readonly type = ActionTypes.ProjectsErrors;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type ProjectsActions = LoadProjects & LoadedProjects & ProjectsErrors;
