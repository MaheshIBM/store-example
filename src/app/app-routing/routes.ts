import { Routes } from '@angular/router';
// Import Containers
import {FullLayoutComponent, SimpleLayoutComponent} from '../baseui/containers';
import { NoPageComponent } from '../404/noPage.component';
import { NotAuthorizedComponent} from '../403/not.authorized';
export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', component: FullLayoutComponent, data: {title: 'Home'}, children: [
      {path: '404', component: NoPageComponent, pathMatch: 'full'},
      {path: 'unauthorized', component: NotAuthorizedComponent, pathMatch: 'full'},
    ]
  },
  {path: '**', redirectTo: '/404'}
];
