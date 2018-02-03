import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthActionTypes } from '../store/auth/auth.actions';
import { GoAction } from '../store/router/router.actions';

import { environment } from '../../../environments/environment';
import { LoginAction, LoginErrorAction, LoginSuccessAction, SignupErrorAction, SignupSuccessAction } from '../store/auth';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationService
    ) { }
    @Effect()
    signup: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.SIGNUP)
        .map(toPayload)
        .switchMap(payload => {
            return this.authenticationService.signup(payload)
                .map(user => {
                    return new SignupSuccessAction(payload);
                })
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
                    return of(new LoginErrorAction({ error: error }));
                });
        });

    @Effect()
    loginSuccess: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGIN_SUCCESS)
        .map(toPayload)
        .switchMap(user => of(new GoAction({ path: ['/clients']})));

    @Effect()
    logout: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGOUT)
        .map(toPayload)
        .do(() => this.authenticationService.logout())
        .switchMap(() => of(new GoAction({ path: ['/login']})));

}
