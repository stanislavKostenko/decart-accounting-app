import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {ProjectsService} from '../../modules/projects/projects.service';
import * as fromProjects from '../../store/actions/projects.actions';
import {Project} from '../../interfaces/project';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions,
              private projectsService: ProjectsService) {
  }

  @Effect()
  loadProjects$ = this.actions$.pipe(
    ofType(fromProjects.ActionTypes.LoadProjects),
    mergeMap(() => this.projectsService.getProjects().pipe(
      map((projects: Project[]) => new fromProjects.LoadedProjects(projects)),
      catchError((error: HttpErrorResponse) => of(new fromProjects.ProjectsErrors(error)))
    ))
  );

}
