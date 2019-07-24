import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {environment} from '@env/environment';
import {CategoryInterface} from '@interfaces/category';

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
}
