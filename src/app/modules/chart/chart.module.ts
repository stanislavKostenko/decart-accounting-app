import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartPageComponent} from './chart-page/chart-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChartPageComponent
  }
];

@NgModule({
  declarations: [ChartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChartModule { }
