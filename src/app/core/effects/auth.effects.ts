import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthActionTypes } from '../store/auth/auth.actions';
import { GoAction } from '../store/router/router.actions';

import { environment } from '../../../environments/environment';
import { LoginAction, LoginErrorAction, LoginSuccessAction, SignupErrorAction, SignupSuccessAction } from '../store/auth';
import { MockAuthService } from '../services/mock-auth.service';

import { AuthenticationService } from '../services/auth/authentication.service';


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: MockAuthService,
        private authenticationService: AuthenticationService
    ) { }
    @Effect()
    signup: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.SIGNUP)
        .map(toPayload)
        .switchMap(payload => {
            return this.authService.signup(payload)
                .map(user => new SignupSuccessAction(user))
                .catch(error => {
                    return of(new SignupErrorAction({ error: error }))  ;
                } );
        });

    @Effect()
    signupSuccess: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.SIGNUP_SUCCESS)
        .map(toPayload)
        .switchMap(user => of(new LoginAction(user)));

    @Effect()
    login: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGIN)
        .map(toPayload)
        .switchMap(payload => {
            return this.authenticationService.login(payload)
                .map(user => new LoginSuccessAction(user))
                .catch(error => {
                    console.log(error);
                    return of(new LoginErrorAction({ error: error }))
                });
        });

    @Effect()
    loginSuccess: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGIN_SUCCESS)
        .map(toPayload)
        .switchMap(user => of(new GoAction({ path: ['/clients']})));
}
