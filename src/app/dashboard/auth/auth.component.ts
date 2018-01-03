import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Auth } from '../reducers/index';
import { LoginRequestAction } from '../reducers/authreducer';


@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class AuthComponent {

    @Input()
    buttonText;
    @Input()
    auth: Auth;

    idText = 'set id';

    @Output()
    login = new EventEmitter<any>();

    @Output()
    logout = new EventEmitter<any>();

    counter = 0;

    constructor(private store$: Store<AppState>) {

    }

    loginLogout(event) {
        this.counter++;
        console.log('login/logout => auth: ', this.auth);
        if (this.auth.isLoggedIn === true) {
            this.logout.emit({ ...event, 'auth_id': +this.idText });
            // this.store.dispatch({ type: 'LOG_OUT' });
        } else if (this.auth.isLoggedIn === false) {
            this.login.emit({...event, 'auth_id': +this.idText});
            // this.store.dispatch({ type: 'LOG_IN' });
        }
    }

    rxTest(event) {
        console.log('clicked', event);
    }
}
