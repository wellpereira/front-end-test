import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from 'src/app/models/category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.sass']
})
export class AddCategoriesComponent implements OnInit {

  category: Category = { id: 0, name: "" };

  constructor(
    private categoryService: CategoriesService,
    private location: Location
    ) { }

  save() {
    this.categoryService.post(this.category).subscribe(
      (cat => {
        console.log(cat);
        this.location.back()
      }),
      (res => console.error(res)),
      (() => console.log('Completed'))
    );
  }

  cancel() {
    this.location.back();
  }

  ngOnInit() {
  }

}
