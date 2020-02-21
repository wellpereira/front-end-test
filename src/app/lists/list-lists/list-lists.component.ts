import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    private router: Router,
    private listsService: ListsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      this.get();
    });
  }

  get() {
    this.listsService.get(this.categoryId).subscribe(res => this.lists = res);
  }

  showListInCategory(listId: number) {
    this.router.navigate(['/list/edit/' + listId, { 'categoryId': this.categoryId }]);
  }

  showItensInList(listId: number) {
    this.router.navigate(['/items/' + listId, { 'categoryId': this.categoryId }]);
  }
}
