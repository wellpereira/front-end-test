import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListsComponent } from './list-lists/list-lists.component';
import { NewListComponent } from './new-list/new-list.component';

@NgModule({
  declarations: [ListListsComponent, NewListComponent],
  exports: [ListListsComponent, NewListComponent],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
