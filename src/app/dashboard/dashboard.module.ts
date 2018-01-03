import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './auth/error.component';
import {TestComponent} from './auth/test.component';
import { StoreModule } from '@ngrx/store';
import { reducers, Auth, AppState } from './reducers';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    FormsModule
  ],
  declarations: [ DashboardComponent,
    AuthComponent,
     ErrorComponent,
    TestComponent]
})
export class DashboardModule { }
