import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItensComponent } from './add-itens/add-itens.component';
import { EditItensComponent } from './edit-itens/edit-itens.component';
import { ListItensComponent } from './list-itens/list-itens.component';

@NgModule({
  declarations: [AddItensComponent, EditItensComponent, ListItensComponent],
  imports: [
    CommonModule
  ]
})
export class ItensModule { }
