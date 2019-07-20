import {Action} from '@ngrx/store';
import {Project} from '../../interfaces/project';
import {HttpErrorResponse} from '@angular/common/http';
import {ProjectArchivePayload} from '../../interfaces/payloads';

export enum ActionTypes {
  LoadProjects = '[Projects Page] Load Projects',
  LoadedProjects = '[Projects Page] Loaded Projects',
  ProjectsErrors = '[Projects Page] Projects Errors',
  CreateProject = '[Projects Page] Create Project',
  DeleteProject = '[Projects Page] Delete Project',
  UpdateProject = '[Projects Page] Update Project',
  ArchiveProject = '[Projects Page] Archive Project'
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

  constructor(public payload: Project) {
  }
}

export class UpdateProject implements Action {
  readonly type = ActionTypes.UpdateProject;

  constructor(public payload: Project) {
  }
}

export class DeleteProject implements Action {
  readonly type = ActionTypes.DeleteProject;

  constructor(public payload: string) {}
}

export class ArchiveProject implements Action {
  readonly type = ActionTypes.ArchiveProject;

  constructor(public payload: ProjectArchivePayload) {}
}

export type ProjectsActions = LoadProjects & LoadedProjects & ProjectsErrors
  & CreateProject & DeleteProject & UpdateProject & ArchiveProject;
