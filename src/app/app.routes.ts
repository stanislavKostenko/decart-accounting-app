import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module')
      .then((module) => module.ProjectsModule)
  },
  {
    path: 'price-list',
    loadChildren: () => import('./modules/price-list/price-list.module')
      .then((module) => module.PriceListModule)
  },
  {
    path: 'estimates',
    loadChildren: () => import('./modules/estimates/estimates.module')
      .then((module) => module.EstimatesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module')
      .then((module) => module.SettingsModule)
  }
];