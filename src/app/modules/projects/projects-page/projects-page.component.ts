import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import * as fromProjects from '../../../store/reducers/projects.reducer';
import {Icons} from '../../../enums/icons';
import {Project} from '../../../interfaces/project';
import {ArchiveProject, CreateProject, DeleteProject, LoadProjects, UpdateProject} from '../../../store/actions/projects.actions';
import {selectProjects} from '../../../store/selectors/projects.selectors';
import {CreateProjectDialogComponent} from '../../../shared/create-project-dialog/create-project-dialog.component';
import {emptyProjectForm} from '../../../mocks/form.mocks';
import {DialogService} from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public icons = Icons;
  public size: string = 'lg';
  public projects$: Observable<Project[]>;
  public emptyProjectForm = emptyProjectForm;

  @ViewChild('projectsPage', {static: true}) projectsPage: ElementRef;

  constructor(private store: Store<fromProjects.State>,
              private dialogService: DialogService) {
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

  onInitDialog(object: Project, edit: boolean) {
    const dialogRef = this.dialogService.openDialog(CreateProjectDialogComponent, {object, edit});
    this.handleDialogData(dialogRef, object.id);
  }

  handleDialogData(dialogRef: any, projectId?: string) {
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.resultCase(result, projectId);
    });
  }

  resultCase(result: { formValue: Project, edit: boolean }, projectId: string) {
    switch (result.edit) {
      case false:
        return this.createProject(result.formValue);
      default:
        return this.updateProject(result.formValue, projectId);
    }
  }

  createProject(project: Project) {
    this.store.dispatch(new CreateProject(project));
  }

  updateProject(project: Project, projectId: string) {
    project.id = projectId;
    this.store.dispatch(new UpdateProject(project));
  }

  deleteProject(projectId: string) {
    this.store.dispatch(new DeleteProject(projectId));
  }

  onArchiveProject(id: string, archived: boolean = true) {
    this.store.dispatch(new ArchiveProject({id, archived}));
  }

}
