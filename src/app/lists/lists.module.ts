import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListsComponent } from './list-lists/list-lists.component';
import { AppMaterialModule } from '../app.material.module';
import { EditListsComponent } from './edit-lists/edit-lists.component';
import { AddListsComponent } from './add-lists/add-lists.component';

@NgModule({
  declarations: [ListListsComponent, EditListsComponent, AddListsComponent],
  exports: [ListListsComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class ListsModule { }
