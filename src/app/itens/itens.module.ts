import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItensComponent } from './add-itens/add-itens.component';
import { EditItensComponent } from './edit-itens/edit-itens.component';
import { ListItensComponent } from './list-itens/list-itens.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddItensComponent, EditItensComponent, ListItensComponent],
  exports: [AddItensComponent, EditItensComponent, ListItensComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class ItensModule { }
