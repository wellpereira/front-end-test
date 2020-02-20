import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TutorialAppComponent } from './tutorial-app/tutorial-app.component';

@NgModule({
  declarations: [ PageNotFoundComponent, TutorialAppComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
