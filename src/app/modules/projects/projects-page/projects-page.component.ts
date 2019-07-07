import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromProjects from '../../../store/reducers/projects.reducer';
import {Icons} from '../../../enums/icons';
import {Observable} from 'rxjs';
import {Project} from '../../../interfaces/project';
import {LoadProjects} from '../../../store/actions/projects.actions';
import {selectProjects} from '../../../store/selectors/projects.selectors';
import {tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {CreateProjectDialogComponent} from '../../../shared/create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  public icons = Icons;
  public size: string = 'lg';
  public projects$: Observable<Project[]>;

  @ViewChild('projectsPage', {static: true}) projectsPage: ElementRef;

  constructor(private store: Store<fromProjects.State>,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.store.pipe(
      select(selectProjects),
      tap((projects: Project[]) => !projects && this.fetchProjects())
    );
  }

  fetchProjects() {
    this.store.dispatch(new LoadProjects());
  }

  initDialog() {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '400px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  get repeat(): number {
    return this.projectsPage.nativeElement.clientWidth / 250;
  }

  get gaps(): number {
    return (this.projectsPage.nativeElement.clientWidth - (Number(this.repeat.toFixed()) * 250)) / 7;
  }

}
