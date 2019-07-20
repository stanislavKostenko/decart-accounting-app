import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {ProjectsService} from '../../modules/projects/projects.service';
import * as fromProjects from '../../store/actions/projects.actions';
import {Project} from '../../interfaces/project';
import {selectProjects} from '../selectors/projects.selectors';
import {LoadedProjects} from '../actions/projects.actions';
import {SharedService} from '../../shared/services/shared.service';
import {MessageService} from '../../shared/services/message.service';
import {MessageItem, MessageType} from '../../enums/message';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions,
              private projectsService: ProjectsService,
              private store: Store<any>,
              private sharedService: SharedService,
              private messageService: MessageService) {
  }

  @Effect()
  loadProjects$ = this.actions$.pipe(
    ofType(fromProjects.ActionTypes.LoadProjects),
    mergeMap(() => this.projectsService.getProjects().pipe(
      map((projects: Project[]) => new fromProjects.LoadedProjects(projects)),
      catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
    ))
  );

  @Effect()
  createProject$ = this.actions$
    .pipe(
      ofType(fromProjects.ActionTypes.CreateProject),
      withLatestFrom(this.store.pipe(select(selectProjects))),
      switchMap(([action, projects]: any[]) => this.projectsService.createProject(action.payload)
        .pipe(
          map((project: Project) => {
            if (project) {
              projects.push(project);
              const message = {type: MessageType.CREATE, item: MessageItem.PROJECT};
              this.messageService.initSuccessToastr(message);
              return new LoadedProjects(projects);
            }
          }),
          catchError((error: HttpErrorResponse) => {
            this.messageService.initErrorToastr(error);
            return of(new fromProjects.ProjectsErrors(error));
          })
        )
      )
    );

  @Effect()
  deleteProject$ = this.actions$
    .pipe(
      ofType(fromProjects.ActionTypes.DeleteProject),
      withLatestFrom(this.store.pipe(select(selectProjects))),
      switchMap(([action, projects]: any[]) => this.projectsService.deleteProject(action.payload)
        .pipe(
          map((response: any) => {
            if (response) {
              projects = this.sharedService.filterArrayById(projects, action.payload);
              const message = {type: MessageType.DELETE, item: MessageItem.PROJECT};
              this.messageService.initSuccessToastr(message);
              return new fromProjects.LoadedProjects(projects);
            }
          }),
          catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
        )
      )
    );

  @Effect()
  updateProject$ = this.actions$
    .pipe(
      ofType(fromProjects.ActionTypes.UpdateProject),
      withLatestFrom(this.store.pipe(select(selectProjects))),
      switchMap(([action, projects]: any[]) => this.projectsService.updateProject(action.payload)
        .pipe(
          map((project: Project) => {
            if (project) {
              projects = this.sharedService.mapArrayById(projects, project);
              const message = {type: MessageType.UPDATE, item: MessageItem.PROJECT};
              this.messageService.initSuccessToastr(message);
              return new fromProjects.LoadedProjects(projects);
            }
          }),
          catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
        )
      )
    );

  @Effect()
  archiveProject$ = this.actions$
    .pipe(
      ofType(fromProjects.ActionTypes.ArchiveProject),
      withLatestFrom(this.store.pipe(select(selectProjects))),
      switchMap(([action, projects]: any) => this.projectsService.archiveProject(action.payload)
        .pipe(
          map((project) => {
            if (project) {
              projects = this.sharedService.mapArrayById(projects, project);
              const message = {type: MessageType.ARCHIVE, item: MessageItem.PROJECT};
              this.messageService.initSuccessToastr(message);
              return new fromProjects.LoadedProjects(projects);
            }
          }),
          catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
        ))
    );
}
