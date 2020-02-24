import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
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
    private http: ItemsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.listId = params.listId;
      this.get();
    });
  }

  get() {
    console.log(this.listId);
    console.log(this.categoryId);
    console.log('...');
    this.http.get(this.categoryId, this.listId).subscribe(res => this.items = res);
  }

}
