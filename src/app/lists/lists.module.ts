import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListsComponent } from './list-lists/list-lists.component';
import { AppMaterialModule } from '../app.material.module';
import { EditListsComponent } from './edit-lists/edit-lists.component';
import { AddListsComponent } from './add-lists/add-lists.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListListsComponent, EditListsComponent, AddListsComponent],
  exports: [ListListsComponent, EditListsComponent, AddListsComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class ListsModule { }
