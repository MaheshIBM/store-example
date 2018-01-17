import { FullLayoutComponent } from '../baseui/containers';
import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ZoneDemoComponent } from './auth/zonedemo.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'zonedemo', component: ZoneDemoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
