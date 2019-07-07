import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {NavigationActionTiming, StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {ProjectsModule} from './modules/projects/projects.module';
import {PriceListModule} from './modules/price-list/price-list.module';
import {EstimatesModule} from './modules/estimates/estimates.module';
import {SettingsModule} from './modules/settings/settings.module';
import {reducers, metaReducers} from './reducers';
import {environment} from '../environments/environment';
import {CustomSerializer} from './custom-route-serializer';
import {ProjectsEffects} from './store/effects/projects.effects';
import {HttpClientModule} from '@angular/common/http';

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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
