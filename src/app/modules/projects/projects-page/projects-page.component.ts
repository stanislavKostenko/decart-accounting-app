import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';

import * as fromProjects from '../../../store/reducers/projects.reducer';
import {Icons} from '../../../enums/icons';
import {Project} from '../../../interfaces/project';
import {CreateProject, LoadProjects} from '../../../store/actions/projects.actions';
import {selectProjects} from '../../../store/selectors/projects.selectors';
import {CreateProjectDialogComponent} from '../../../shared/create-project-dialog/create-project-dialog.component';
import {emptyProjectForm} from '../../../mocks/form.mocks';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
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
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, this.dialogConfig);
    this.handleDialogData(dialogRef);
  }

  get dialogConfig(): MatDialogConfig {
    return {
      maxWidth: '400px',
      panelClass: 'general-box',
      backdropClass: 'general-dialog-backdrop',
      hasBackdrop: true,
      data: {
        object: emptyProjectForm
      }
    };
  }

  handleDialogData(dialogRef: MatDialogRef<CreateProjectDialogComponent>) {
    dialogRef.afterClosed().subscribe((result) => this.createProject(result));
  }

  createProject(project: Project) {
    this.store.dispatch(new CreateProject(project));
  }

}
