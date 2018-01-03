import {authReducer} from './authreducer';
import {errorReducer} from './errorreducer';

export interface Auth {
    isLoggedIn: boolean;
    roles: string [];
}

export interface Prev {
    name: string;
    allowed: boolean;
}




export interface AppState {
    // routerReducer: fromRouter.RouterReducerState;
    auth: Auth;
    error: Error;
  }

  export const reducers = {
    // routerReducer: fromRouter.routerReducer,
    auth: authReducer,
    error: errorReducer
};
