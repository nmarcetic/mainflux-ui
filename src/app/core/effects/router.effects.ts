import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterActionTypes } from '../store/router/index';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }

    @Effect({ dispatch: false })
    navigate$ = this.actions$
        .ofType(RouterActionTypes.GO)
        .map(toPayload)
        .do(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }));

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$.ofType(RouterActionTypes.BACK).do(() => this.location.back());

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.ofType(RouterActionTypes.FORWARD).do(() => this.location.forward());
}
