import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {Project} from '../../interfaces/project';
import {map} from 'rxjs/operators';
import {ProjectArchivePayload} from '../../interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects/all').pipe(
      map((response: Project[]) => response)
    );
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl + 'projects/create', project)
      .pipe(map((response: Project) => response));
  }

  deleteProject(projectId: string): Observable<Project> {
    return this.http.delete<Project>(this.baseUrl + `projects/${projectId}`)
      .pipe(map((response) => response));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl + `projects/${project.id}`, project)
      .pipe(map((response: Project) => response));
  }

  archiveProject(data: ProjectArchivePayload): Observable<Project> {
    return this.http.put<Project>(this.baseUrl + `projects/${data.id}/archive`,
      {archived: data.archived})
      .pipe(map((response: Project) => response));
  }
}
