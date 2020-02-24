import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.sass']
})
export class AddItemsComponent implements OnInit {

  item: Item = {id: null, name: "", done: false};
  listId: number;
  categoryId: number;
  
  constructor(
    private route: ActivatedRoute,
    private http: ItemsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.listId = params.listId;
    });
  }

  save():void {
    this.http.post(this.categoryId, this.listId, this.item).subscribe(
      (res => console.log(res)),
      (res => console.error(res.error)),
      (() => console.log('Fim')));
  }

  clear(): void {
    this.item.name = "";
  }

}