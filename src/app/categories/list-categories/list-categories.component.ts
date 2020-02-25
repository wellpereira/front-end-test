import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.sass']
})
export class ListCategoriesComponent implements OnInit {

  categoriesList: Category[] = [];

  constructor(
    private categoriesService: CategoriesService) { }

  delete(category: Category) {
    this.categoriesService.delete(category).subscribe(
      (res => this.get()),
      (res => console.error(res)),
      (() => console.log('Completed...'))
    );
  }

  get() {
    this.categoriesService.get().subscribe(
      (cats => this.categoriesList = cats)
      );
  }

  ngOnInit() {
    this.get();
  }

}
