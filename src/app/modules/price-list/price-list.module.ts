import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PriceListPageComponent} from './price-list-page/price-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PriceListPageComponent
  }
];

@NgModule({
  declarations: [PriceListPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PriceListModule {
}
