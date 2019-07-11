import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

import {SideBarComponent} from './side-bar/side-bar.component';
import {CardComponent} from './card/card.component';
import {CreateProjectDialogComponent} from './create-project-dialog/create-project-dialog.component';
import {FormComponent} from './form/form.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    SideBarComponent,
    CardComponent,
    CreateProjectDialogComponent,
    FormComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
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
    MatInputModule,
    MatExpansionModule
  ]
})
export class SharedModule {
}
