import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.sass']
})
export class EditItemsComponent implements OnInit {

  item: Item = {id: null, name: "", done: false};
  itemId: number;
  listId: number;
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private http: ItemsService, 
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.listId = params.listId;
      this.item.id = params.itemId;
      this.get();
    });
  }

  get(): void {
    this.http.getId(this.categoryId, this.listId, this.item).subscribe(
      (res => {
        this.item.id = res.id;
        this.item.name = res.name;
        this.item.done = res.done;
      }),
      (res => console.error(res.error)),
      (() => console.log('Completed...'))
    );
  }

  save(): void {
    this.http.put(this.categoryId, this.listId, this.item).subscribe(
      (res => {
        console.log(res);
        this.location.back();
      }),
      (res => console.error(res.error)),
      (() => console.log('Completed...'))
    );
  }

  delete() {
    this.http.delete(this.categoryId, this.listId, this.item).subscribe(
      (res => {
        console.log(res);
        this.location.back();
      }),
      (res => console.error(res.error)),
      (() => console.log('Completed...'))
    );
  }

  cancel() {
    this.location.back();
  }

}
