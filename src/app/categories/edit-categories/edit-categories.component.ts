import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from '../categories.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.sass']
})
export class EditCategoriesComponent implements OnInit {

  id: number = 0;
  category: Category = {id: 0, name: ""};

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.categoryId;
      this.get();
    });
  }

  get() {
    this.categoriesService.getId(this.id).subscribe(cat => {
      this.category.id = cat.id;
      this.category.name = cat.name;
    });
  }

  save() {
    this.categoriesService.put(this.category).subscribe(
      (res => {
        console.log(res);
        this.location.back();
      }),
      (res => console.error(res)),
      (() => console.log('Completed'))
    );
  }

  delete() {
    this.categoriesService.delete(this.category).subscribe(
      (res => {
        console.log(res);
        this.location.back();
      }),
      (res => console.error(res)),
      (() => console.log('Completed'))
    );
  }

  cancel() {
    this.location.back();
  }
}
