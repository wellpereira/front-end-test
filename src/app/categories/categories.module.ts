import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app.material.module';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListCategoriesComponent, AddCategoriesComponent, EditCategoriesComponent],
  exports: [ListCategoriesComponent, AddCategoriesComponent, EditCategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class CategoriesModule { }
