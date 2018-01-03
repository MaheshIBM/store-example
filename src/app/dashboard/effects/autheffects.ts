import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { AuthService } from '../services/authservice';
import { Auth } from '../reducers/index';
import { LoginRequestAction, LoginSuccessAction} from '../reducers/authreducer';
import { LoginErrorAction } from '../reducers/errorreducer';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class AuthEffects {

  constructor(private authService: AuthService,  private actions$: Actions) {

  }


  @Effect()
  login$ = this.actions$
    .ofType(LoginRequestAction.LOGIN_REQUEST)
    .flatMap((action: LoginRequestAction) => this.authService.getAuthById(action.id)
      .map( auth => new LoginSuccessAction(auth))
      .catch(error => Observable.of(new LoginErrorAction(error)))
  );

}
