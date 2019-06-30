import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {SideBarComponent} from './side-bar/side-bar.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [SideBarComponent, CardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [SideBarComponent, CardComponent, MatButtonModule]
})
export class SharedModule {
}
