import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, NgZone, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Auth } from './reducers';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './services/authservice';
import { LoginRequestAction, LogoutAction } from './reducers/authreducer';
import { Error } from './reducers/errorreducer';
import { withLatestFrom } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { State } from '@ngrx/store';

@Component({
  templateUrl: 'dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  auth: Auth;
  buttonText = 'Login';
  error: Error = {message: ''};
  appTestName = 'Tutorial';


  constructor(private store$: Store<AppState>,
    private zone: NgZone,
    private authService: AuthService,
    private cd: ChangeDetectorRef,
  private aState: State<AppState>) {

    this.store$.subscribe(state => this.handleStateChange(state));

    // this.onClick$.withLatestFrom
    // this.store$.first(() => true).map((x) => console.log("X is :"+x));
  }

  ngOnInit() {
    console.log('On init');

  }

  onLogin(event) {
    // get the user name password from event
    // and pass it to the service if needed.
    console.log('AuthService', this.authService);
    this.store$.dispatch(
      new LoginRequestAction(event.auth_id, '', ''));
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
    this.cd.markForCheck();
  }


  appTestClicked(event) {
    console.log('event has made its way to the dashboard');
  }

  clicked(event) {
    console.log('Button is clicked');
    // console.log(this.aState.getValue());
  }
}
