import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from 'src/app/models/item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.sass']
})
export class AddItemsComponent implements OnInit {

  item: Item = {id: null, name: "", done: false};
  listId: number;
  categoryId: number;
  errorMsg: string ="";
  
  constructor(
    private route: ActivatedRoute,
    private http: ItemsService,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.listId = params.listId;
    });
  }

  save():void {
    this.http.post(this.categoryId, this.listId, this.item).subscribe(
      (res => {
        console.log(res);
        this.location.back();
      }),
      (res => {
        console.error(res);
        this.errorMsg = res.error;
      }),
      (() => console.log('Fim')));
  }

  cancel(): void {
    this.item.name = "";
    this.location.back();
  }

}
