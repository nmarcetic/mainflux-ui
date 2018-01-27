import { Action } from '@ngrx/store';

export interface User {
    email: string;
    password: string;
}

export enum AuthActionTypes {
    SIGNUP = '[Auth] SIGNUP',
    SIGNUP_SUCCESS = '[Auth] SIGNUP_SUCCESS',
    SIGNUP_ERROR = '[Auth] SIGNUP_ERROR',
    LOGIN = '[Auth] LOGIN',
    LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
    LOGIN_ERROR = '[Auth] LOGIN_ERROR',
}

export class SignupAction implements Action {
    readonly type = AuthActionTypes.SIGNUP;

    constructor(public payload: User) { }
}

export class SignupSuccessAction implements Action {
    readonly type = AuthActionTypes.SIGNUP_SUCCESS;

    constructor(public payload: User) { }
}

export class SignupErrorAction implements Action {
    readonly type = AuthActionTypes.SIGNUP_ERROR;

    constructor(public payload?: any) { }
}

export class LoginAction implements Action {
    readonly type = AuthActionTypes.LOGIN;

    constructor(public payload: User) { }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;

    constructor(public payload: User) { }
}

export class LoginErrorAction implements Action {
    readonly type = AuthActionTypes.LOGIN_ERROR;

    constructor(public payload?: any) { }
}

export type AuthActions
                        = SignupAction
                        | SignupSuccessAction
                        | SignupErrorAction
                        | LoginAction
                        | LoginSuccessAction
                        | LoginErrorAction;
