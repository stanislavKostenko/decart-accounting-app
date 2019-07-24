import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@env/environment';
import {ProjectInterface} from '@interfaces/project';
import {ProjectArchivePayload} from '@interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.baseUrl + 'projects/all').pipe(
      map((response: ProjectInterface[]) => response)
    );
  }

  createProject(project: ProjectInterface): Observable<ProjectInterface> {
    return this.http.post<ProjectInterface>(this.baseUrl + 'projects/create', project)
      .pipe(map((response: ProjectInterface) => response));
  }

  deleteProject(projectId: string): Observable<ProjectInterface> {
    return this.http.delete<ProjectInterface>(this.baseUrl + `projects/${projectId}`)
      .pipe(map((response) => response));
  }

  updateProject(project: ProjectInterface): Observable<ProjectInterface> {
    return this.http.put<ProjectInterface>(this.baseUrl + `projects/${project.id}`, project)
      .pipe(map((response: ProjectInterface) => response));
  }

  archiveProject(data: ProjectArchivePayload): Observable<ProjectInterface> {
    return this.http.put<ProjectInterface>(this.baseUrl + `projects/${data.id}/archive`,
      {archived: data.archived})
      .pipe(map((response: ProjectInterface) => response));
  }
}
