import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.categoryId = params.categoryId;
      this.listId = params.listId;
      this.get();
    });
  }

  get() {
    console.log('...');
  }

}
