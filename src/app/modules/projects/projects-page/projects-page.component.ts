import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';

import * as fromProjects from '../../../store/reducers/projects.reducer';
import {Icons} from '../../../enums/icons';
import {Project} from '../../../interfaces/project';
import {LoadProjects} from '../../../store/actions/projects.actions';
import {selectProjects} from '../../../store/selectors/projects.selectors';
import {CreateProjectDialogComponent} from '../../../shared/create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent implements OnInit {
  public icons = Icons;
  public size: string = 'lg';
  public projects$: Observable<Project[]>;

  @ViewChild('projectsPage', {static: true}) projectsPage: ElementRef;

  constructor(private store: Store<fromProjects.State>,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
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
      minWidth: '400px',
      minHeight: '400px',
      panelClass: 'general-box',
      backdropClass: 'general-dialog-backdrop',
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

}
