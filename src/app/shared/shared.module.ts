import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {SideBarComponent} from './side-bar/side-bar.component';
import {CardComponent} from './card/card.component';
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    SideBarComponent,
    CardComponent,
    CreateProjectDialogComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    SideBarComponent,
    CardComponent,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    CreateProjectDialogComponent,
    MatFormFieldModule,
    FormComponent,
    MatInputModule
  ]
})
export class SharedModule {
}
