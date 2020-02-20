import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

@NgModule({
  declarations: [NewCategoryComponent, ListCategoriesComponent],
  exports: [NewCategoryComponent, ListCategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
