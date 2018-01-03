import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


/** import files related to base framework starts **/
// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './baseui';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './baseui/containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './baseui/directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
];
/** import files related to base framework ENDS **/

/** import of all 3rd party modules or packages -- STARTS **/
import { NgxPermissionsModule } from 'ngx-permissions';
/** import of all 3rd party modules or packages -- ENDS **/

/** import of all the custom Created components -- STARTS **/
import { NoPageComponent } from './404/noPage.component';
import { NotAuthorizedComponent } from './403/not.authorized';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './dashboard/reducers';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './dashboard/services/authservice';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './dashboard/effects/autheffects';
import { FormsModule } from '@angular/forms';
/** import of all the custom Created components -- ENDS **/

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NoPageComponent,
    NotAuthorizedComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    NgxPermissionsModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
