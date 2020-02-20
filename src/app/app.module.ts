import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from "./app.material.module";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { CategoriesModule } from './categories/categories.module';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { NewCategoryComponent } from './categories/new-category/new-category.component';
import { ListsModule } from './lists/lists.module';
import { ListListsComponent } from './lists/list-lists/list-lists.component';
import { NewListComponent } from './lists/new-list/new-list.component';


const routes: Routes = [
  { path: 'lists', component: ListListsComponent },
  { path: 'list/new', component: NewListComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'category/new', component: NewCategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: '',    redirectTo: '/home', pathMatch: 'full' },
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
