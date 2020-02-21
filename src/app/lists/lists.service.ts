import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  get(categoryId: number): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiURL}/categories/${categoryId}/lists`);
  }

  getId(id: number, categoryId: number): Observable<List> {
    return this.http.get<List>(`${environment.apiURL}/categories/${categoryId}/lists/${id}`);
  }

  post(l: List, categoryId: number): Observable<List> {
    return this.http.post<List>(`${environment.apiURL}/categories/${categoryId}/lists`, {name: l.name});
  }
 
  put(l: List, categoryId: number): Observable<List> {
    return this.http.put<List>(`${environment.apiURL}/categories/${categoryId}/lists/${l.id}`, {name: l.name});
  }

  delete(l: List, categoryId: number): Observable<any> {
    return this.http.delete(`${environment.apiURL}/categories/${categoryId}/lists/${l.id}`);
  }

}
