import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  get(categoryId: number, listId: number): Observable<Item[]> {    
    return this.http.get<Item[]>(`${environment.apiURL}/categories/${categoryId}/lists/${listId}/items`);
  }

  getId(categoryId: number, listId: number, i: Item): Observable<Item> {
    return this.http.get<Item>(`${environment.apiURL}/categories/${categoryId}/lists/${listId}/items/${i.id}`);
  }

  post(categoryId: number, listId: number, i: Item): Observable<Item> {
    return this.http.post<Item>(`${environment.apiURL}/categories/${categoryId}/lists/${listId}/items`, {name: i.name});
  }
 
  put(categoryId: number, listId: number, i: Item): Observable<Item> {
    return this.http.put<Item>(`${environment.apiURL}/categories/${categoryId}/lists/${listId}/items/${i.id}`, {name: i.name, done: i.done});
  }

  delete(categoryId: number, listId: number, i: Item): Observable<any> {
    return this.http.delete(`${environment.apiURL}/categories/${categoryId}/lists/${listId}/items/${i.id}`);
  }
}
