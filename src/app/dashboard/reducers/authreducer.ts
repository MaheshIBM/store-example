import { Action } from '@ngrx/store';
import { Auth } from '../reducers';


export class LoginRequestAction implements Action {
    static LOGIN_REQUEST = 'LOGIN_REQUEST';
    type: string;
    id: number;
    username: string;
    password: string;

    constructor(id: number, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.type = LoginRequestAction.LOGIN_REQUEST;
    }
}


export class LoginSuccessAction implements Action {
    type: string;
    auth: Auth;
    constructor(auth: Auth) {
        this.auth = auth;
        this.type = 'LOGIN_SUCCESS';
    }
}



export class LogoutAction implements Action {
    type: string;
    auth: Auth;

    constructor() {
        this.auth = {
            isLoggedIn: false,
            roles: []
        };
        this.type = 'LOGOUT';
    }
}



export function authReducer(state: Auth, action: Action): Auth {
    console.log('authReducer: action', action.type);
    switch (action.type) {
        case '@ngrx/store/init':
            return new LogoutAction().auth;
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS- old state', state);
            return (action as LoginSuccessAction).auth;
        case 'LOGOUT':
            console.log('LOGOUT', state);
            return (action as LogoutAction).auth;
        default:
            return state;
   }
}
