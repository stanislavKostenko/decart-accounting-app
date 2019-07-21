import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {NavigationActionTiming, StoreRouterConnectingModule} from '@ngrx/router-store';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from '@shared/shared.module';
import {ProjectsModule} from '@projects/projects.module';
import {PriceListModule} from '@price-list/price-list.module';
import {EstimatesModule} from '@estimates/estimates.module';
import {SettingsModule} from './modules/settings/settings.module';
import {metaReducers, reducers} from './reducers';
import {environment} from '@env/environment';
import {CustomSerializer} from './custom-route-serializer';
import {ProjectsEffects} from '@store/effects/projects.effects';
import {ToastComponent} from '@shared/components/toast/toast.component';
import {DialogComponent} from '@shared/components/form-dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ProjectsModule,
    PriceListModule,
    EstimatesModule,
    SettingsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([ProjectsEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      toastComponent: ToastComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ToastComponent, DialogComponent],
})
export class AppModule {
}
