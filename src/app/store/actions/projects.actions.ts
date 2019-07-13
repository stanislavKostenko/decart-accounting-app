import {Action} from '@ngrx/store';
import {Project} from '../../interfaces/project';
import {HttpErrorResponse} from '@angular/common/http';

export enum ActionTypes {
  LoadProjects = '[Projects Page] Load Projects',
  LoadedProjects = '[Projects Page] Loaded Projects',
  ProjectsErrors = '[Projects Page] Projects Errors',
  CreateProject = '[Projects Page] Create Project'
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

export class CreateProject implements Action {
  readonly type = ActionTypes.CreateProject;
  constructor(public payload: Project) {}
}

export type ProjectsActions = LoadProjects & LoadedProjects & ProjectsErrors
  & CreateProject;
