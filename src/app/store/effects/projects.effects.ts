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
import {LoadedProjects} from '../../store/actions/projects.actions';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions,
              private projectsService: ProjectsService,
              private store: Store<any>) {
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
            projects.push(project);
            return new LoadedProjects(projects);
          }),
          catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
        )
      )
    );

}
