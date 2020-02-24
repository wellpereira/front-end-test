import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.sass']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];
  listId: number;
  categoryId: number;

  constructor(
    private route: ActivatedRoute, 
    private http: ItemsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.listId = params.listId;
      this.get();
    });
  }

  get(): void {
    this.http.get(this.categoryId, this.listId).subscribe(res => this.items = res);
  }

  newItem(): void {
    this.router.navigate(['/items/new/' + this.listId, { 'categoryId': this.categoryId }]);
  }

  editItem(itemId: number): void {
    this.router.navigate(['/items/edit/' + itemId, { 'categoryId': this.categoryId, 'listId': this.listId }]);
  }
}
