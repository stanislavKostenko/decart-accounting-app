import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {CategoriesPageComponent} from './categories-page/categories-page.component';
import {SharedModule} from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent
  }
];

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule
  ]
})
export class CategoriesModule { }
