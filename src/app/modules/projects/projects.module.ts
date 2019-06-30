import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent
  }
];

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    SharedModule
  ]
})
export class ProjectsModule {
}
