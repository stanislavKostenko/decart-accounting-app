import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EstimatesPageComponent} from './estimates-page/estimates-page.component';

const routes: Routes = [
  {
    path: '',
    component: EstimatesPageComponent
  }
];

@NgModule({
  declarations: [EstimatesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstimatesModule {
}
