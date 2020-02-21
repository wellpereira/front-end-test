import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../lists.service';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-add-lists',
  templateUrl: './add-lists.component.html',
  styleUrls: ['./add-lists.component.sass']
})
export class AddListsComponent implements OnInit {

  list: List = { id: null, name: ""};
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private serviceLists: ListsService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
    });
  }

  save() {
    this.serviceLists.post(this.list, this.categoryId).subscribe(res => console.log(res));
  }

  clear() {
    this.list.id = null;
    this.list.name = "";
  }

}
