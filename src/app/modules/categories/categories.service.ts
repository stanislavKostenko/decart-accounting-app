import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {environment} from '@env/environment';
import {CategoryInterface} from '@interfaces/category';
import {WorksInterface} from '@interfaces/work';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.baseUrl + 'categories/all')
      .pipe(map((response: CategoryInterface[]) => response));
  }

  createCategory(category: CategoryInterface): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>(this.baseUrl + 'categories/create', category)
      .pipe(map((response: CategoryInterface) => response));
  }

  updateCategory(category: CategoryInterface): Observable<CategoryInterface> {
    return this.http.put<CategoryInterface>(this.baseUrl + `categories/${category.id}`, category)
      .pipe(map((response: CategoryInterface) => response));
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete<CategoryInterface>(this.baseUrl + `categories/${categoryId}`)
      .pipe(map((response: any) => response));
  }

  getCategoryWorks(categoryId: string): Observable<WorksInterface[]> {
    return this.http.get<WorksInterface[]>(`${this.baseUrl}categories/${categoryId}/works`)
      .pipe(map((response: WorksInterface[]) => response));
  }

  createCategoryWork(categoryId: string, work: WorksInterface): Observable<WorksInterface> {
    return this.http.post<WorksInterface>(`${this.baseUrl}categories/${categoryId}/works/create`, work)
      .pipe(map((response: WorksInterface) => response));
  }
}
