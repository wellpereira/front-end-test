import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../lists.service';
import { List } from 'src/app/models/list';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-lists',
  templateUrl: './edit-lists.component.html',
  styleUrls: ['./edit-lists.component.sass']
})
export class EditListsComponent implements OnInit {

  list: List = { id: 0, name: ""};
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private serviceLists: ListsService,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.list.id = params.listId;
      this.categoryId = params.categoryId;
      this.get();
    });
  }

  get() {
    this.serviceLists.getId(this.list.id, this.categoryId).subscribe(
      (res => this.list = res),
      (res => console.error(res)),
      (() => console.log('Completed...'))
    );
  }

  save() {
    this.serviceLists.put(this.list, this.categoryId).subscribe(
      (res => {
        console.log(res);
        this.location.back()
      }),
      (res => console.error(res)),
      (() => console.log('Completed...'))
    );
  }

  delete() {
    this.serviceLists.delete(this.list, this.categoryId).subscribe(
      (res => {
        console.log(res);
        this.location.back()
      }),
      (res => console.error(res)),
      (() => console.log('Completed...'))
    );
  }

  cancel() {
    this.location.back();
  }
}