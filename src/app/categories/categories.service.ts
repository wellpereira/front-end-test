import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiURL}/categories`);
  }

  getId(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.apiURL}/categories/${id}`);
  }

  post(c: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiURL}/categories`, c);
  }

  delete(c: Category): Observable<any> {
    return this.http.delete(`${environment.apiURL}/categories/${c.id}`);
  }

  put(c: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.apiURL}/categories/${c.id}`, {name: c.name});
  }
}
