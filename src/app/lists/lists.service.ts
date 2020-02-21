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

  get(idCategory: number): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiURL}/categories/${idCategory}/lists`);
  }

  getId(id: number, idCategory: number): Observable<List> {
    return this.http.get<List>(`${environment.apiURL}/categories/${idCategory}/lists/${id}`);
  }

  // post(c: List): Observable<List> {
    //   return this.http.post<List>(`${environment.apiURL}/categories`, c);
    // }
    
  put(l: List): Observable<List> {
    return this.http.put<List>(`${environment.apiURL}/categories/${l.id}`, {name: l.name});
  }

  // delete(c: List): Observable<any> {
  //   return this.http.delete(`${environment.apiURL}/categories/${c.id}`);
  // }

}
