import { Client } from './clients.reducer';
import { Action } from '@ngrx/store';

export enum ClientsActionTypes {
    GET_CLIENTS = '[Clients] GET_CLIENTS',
    GET_CLIENTS_SUCCESS = '[Clients] GET_CLIENTS_SUCCESS',
    GET_CLIENTS_ERROR = '[Clients] GET_CLIENTS_ERROR',
    ADD_CLIENT = '[Clients] ADD_CLIENT',
    ADD_CLIENT_SUCCESS = '[Clients] ADD_CLIENT_SUCCESS',
    ADD_CLIENT_ERROR = '[Clients] ADD_CLIENT_ERROR',
    DELETE_CLIENT = '[Clients] DELETE_CLIENT',
    DELETE_CLIENT_SUCCESS = '[Clients] DELETE_CLIENT_SUCCESS',
    DELETE_CLIENT_ERROR = '[Clients] DELETE_CLIENT_ERROR',
}

export class GetClientsAction implements Action {
    readonly type = ClientsActionTypes.GET_CLIENTS;

    constructor(public payload?) { }
}

export class GetClientsSuccessAction implements Action {
    readonly type = ClientsActionTypes.GET_CLIENTS_SUCCESS;

    constructor(public payload?) { }
}

export class GetClientsErrorAction implements Action {
    readonly type = ClientsActionTypes.GET_CLIENTS_ERROR;

    constructor(public payload?) { }
}

export class AddClientAction implements Action {
    readonly type = ClientsActionTypes.ADD_CLIENT;

    constructor(public payload: Client) { }
}

export class AddClientSuccessAction implements Action {
    readonly type = ClientsActionTypes.ADD_CLIENT_SUCCESS;

    constructor(public payload?) { }
}

export class AddClientErrorAction implements Action {
    readonly type = ClientsActionTypes.ADD_CLIENT_ERROR;

    constructor(public payload?) { }
}

export class DeleteClientAction implements Action {
    readonly type = ClientsActionTypes.DELETE_CLIENT;

    constructor(public payload: Client) { }
}

export class DeleteClientSuccessAction implements Action {
    readonly type = ClientsActionTypes.DELETE_CLIENT_SUCCESS;

    constructor(public payload?) { }
}

export class DeleteClientErrorAction implements Action {
    readonly type = ClientsActionTypes.DELETE_CLIENT_ERROR;

    constructor(public payload?) { }
}

export type ClientsActions
                        = GetClientsAction
                        | GetClientsSuccessAction
                        | GetClientsErrorAction
                        | AddClientAction
                        | AddClientSuccessAction
                        | AddClientErrorAction
                        | DeleteClientAction
                        | DeleteClientSuccessAction
                        | DeleteClientErrorAction;
