import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListsComponent } from './list-lists/list-lists.component';

@NgModule({
  declarations: [ListListsComponent],
  exports: [ListListsComponent],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
