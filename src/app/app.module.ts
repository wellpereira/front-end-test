import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from "./app.material.module";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CategoriesModule } from './categories/categories.module';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { EditCategoriesComponent } from './categories/edit-categories/edit-categories.component';
import { ListsModule } from './lists/lists.module';
import { ListListsComponent } from './lists/list-lists/list-lists.component';
import { FormsModule } from '@angular/forms';
import { EditListsComponent } from './lists/edit-lists/edit-lists.component';
import { AddListsComponent } from './lists/add-lists/add-lists.component';
import { ItemsModule } from './items/items.module';


const routes: Routes = [
  { path: 'list/new/:categoryId', component: AddListsComponent },
  { path: 'list/edit/:listId', component: EditListsComponent },
  { path: 'lists/:categoryId', component: ListListsComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'category/new', component: AddCategoriesComponent },
  { path: 'category/edit/:categoryId', component: EditCategoriesComponent },
  { path: '',    redirectTo: '/categories', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    CoreModule,
    CategoriesModule,
    ListsModule,
    FormsModule,
    ItemsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
