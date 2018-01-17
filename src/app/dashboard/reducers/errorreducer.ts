
import { Action } from '@ngrx/store';


export interface Error {
    message: string;
}

export class LoginErrorAction implements Action {
    type: string;
    error: Error;
    constructor( error: Error ) {
        this.error = error;
        this.type = 'LOGIN_ERROR';
    }
}

export class TestErrorAction implements Action {
    type: string;
    error: Error;

    constructor( error: Error) {
        this.error = error;
        this.type = 'TEST_ERROR';
    }

}
export class ClearErrorAction implements Action {
    type: string;

    constructor() {
        this.type = 'CLEAR_ERROR';
    }

}
export function errorReducer(state, action: Action) {
    console.log('authReducer: action', action.type);
    switch (action.type) {
        case '@ngrx/store/init':
            return { message: ''};
        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR - old state', state);
            return (action as LoginErrorAction).error;
        case 'TEST_ERROR':
            return (action as TestErrorAction).error;
        default:
            return {message: ''};
   }
}
