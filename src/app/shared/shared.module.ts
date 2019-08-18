import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatSortModule, MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

import {SideBarComponent} from './components/side-bar/side-bar.component';
import {CardComponent} from './components/card/card.component';
import {DialogComponent} from './components/form-dialog/dialog.component';
import {FormComponent} from './components/form/form.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {ToastComponent} from './components/toast/toast.component';
import {AddComponent} from './components/add/add.component';
import {TranslateModule} from '@ngx-translate/core';
import {TableComponent} from './components/table/table.component';
import {StopPropagationDirective} from '../directives/stop-propagation.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    CardComponent,
    DialogComponent,
    FormComponent,
    AccordionComponent,
    ToastComponent,
    AddComponent,
    TableComponent,
    StopPropagationDirective
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
    MatExpansionModule,
    MatTableModule,
    TranslateModule,
    MatSortModule
  ],
  exports: [
    SideBarComponent,
    CardComponent,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    DialogComponent,
    MatFormFieldModule,
    FormComponent,
    MatInputModule,
    MatExpansionModule,
    AddComponent,
    TranslateModule,
    MatTableModule,
    TableComponent,
    StopPropagationDirective
  ]
})
export class SharedModule {
}
