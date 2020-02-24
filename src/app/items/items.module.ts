import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';
import { AppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';

@NgModule({
  declarations: [ListItemsComponent, AddItemsComponent, EditItemsComponent],
  exports: [ListItemsComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class ItemsModule { }
