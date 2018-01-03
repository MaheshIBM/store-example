import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, NgZone, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Auth } from './reducers';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './services/authservice';
import { LoginRequestAction, LogoutAction } from './reducers/authreducer';
import { Error } from './reducers/errorreducer';



@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  auth: Auth;
  buttonText = 'Login';
  error: Error = {message: ''};
  appTestName = 'Tutorial';

  constructor(private store$: Store<AppState>, private zone: NgZone, private authService: AuthService) {
    // this.store.subscribe(state => this.zone.run(() => this.handleStateChange(state)));
    console.log('service', this.authService);
    console.log('store', store$);
    this.store$.subscribe(state => this.handleStateChange(state));
  }

  onLogin(event) {
    // get the user name password from event
    // and pass it to the service if needed.
    console.log('AuthService', this.authService);
    this.store$.dispatch(new LoginRequestAction(event.auth_id, '', ''));
    /* this.authService.getAuthById(1).subscribe((auth) => {
      this.store.dispatch(new LoginAction(auth));
    });*/
  }

  onLogout(event) {
    this.store$.dispatch(new LogoutAction());
  }

  handleStateChange(state) {
    console.log('state in handleStateChange', state);
    this.auth = state.auth;
    this.error = state.error;
    if (this.auth.isLoggedIn === true) {
      this.buttonText = 'Logout';
    } else {
      this.buttonText = 'Login';
    }
  }


  appTestClicked(event) {
    console.log('event has made its way to the dashboard');
  }
}