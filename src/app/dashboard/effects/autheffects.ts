import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { AuthService } from '../services/authservice';
import { LoginRequestAction, LoginSuccessAction} from '../reducers/authreducer';
import { LoginErrorAction, TestErrorAction } from '../reducers/errorreducer';
import { Store } from '@ngrx/store';
import { AppState, Auth } from '../reducers';
import 'rxjs/add/observable/timer';
import 'rxjs/RX';
@Injectable()
export class AuthEffects {

  constructor(private authService: AuthService,
    private actions$: Actions,
    private store$: Store<AppState>) {

  }


  @Effect()
  login$ = this.actions$
    .ofType(LoginRequestAction.LOGIN_REQUEST)
    .flatMap((action: LoginRequestAction) => this.authService.getAuthById(action.id)
      .map(auth => new LoginSuccessAction(auth))
      .catch(error => Observable.of(new LoginErrorAction(error)))
    );

  @Effect()
  click$ = this.actions$
    .ofType(LoginRequestAction.LOGIN_REQUEST)
    .flatMap((action: LoginRequestAction) =>
      Observable.timer(1500)
        .map(() =>
          new TestErrorAction(
            { message: 'Hi there someone asked to be logged in' }
          )));
}

