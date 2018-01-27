import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router/src/router';

export enum RouterActionTypes {
    GO = '[Router] GO',
    BACK = '[Router] BACK',
    FORWARD = '[Router] FORWARD'
}

export class GoAction implements Action {
    readonly type = RouterActionTypes.GO;

    constructor(public payload: {
        path: any[],
        query?: object;
        extras?: NavigationExtras
    }) { }
}

export class BackAction implements Action {
    readonly type = RouterActionTypes.BACK;
}

export class ForwardAction implements Action {
    readonly type = RouterActionTypes.FORWARD;
}

export type RouterActions
                        = GoAction
                        | BackAction
                        | ForwardAction;
