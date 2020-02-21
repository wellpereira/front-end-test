import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.sass']
})
export class AddCategoriesComponent implements OnInit {

  category: Category = { id:"", name: "" };

  constructor(private categoryService: CategoriesService) { }

  save() {
    this.categoryService.post(this.category).subscribe(cat => console.log(cat));
  }

  clear() {
    this.category.name = "";
  }

  ngOnInit() {
  }

}
