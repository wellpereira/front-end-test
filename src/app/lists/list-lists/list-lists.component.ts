import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-lists',
  templateUrl: './list-lists.component.html',
  styleUrls: ['./list-lists.component.sass']
})
export class ListListsComponent implements OnInit {

  lists: List[] = [];
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private serviceLists: ListsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.get();
    });
  }

  get() {
    this.serviceLists.get(this.categoryId).subscribe(res => this.lists = res);
  }

}
