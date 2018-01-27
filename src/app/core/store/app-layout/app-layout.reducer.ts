import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../auth';
import { ClientsActions, ClientsActionTypes } from '../clients/index';

export interface State {
    loading: boolean;
}

const initialState: State = {
    loading: false
};

export function reducer(
    state: State = initialState,
    action: AuthActions | ClientsActions
) {
    switch (action.type) {
        case AuthActionTypes.SIGNUP:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case AuthActionTypes.SIGNUP_ERROR:
            return {
                ...state,
                loading: false
            };
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case AuthActionTypes.LOGIN_ERROR:
            return {
                ...state,
                loading: false
            };
        case ClientsActionTypes.GET_CLIENTS:
            return {
                ...state,
                loading: true
            };
        case ClientsActionTypes.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case ClientsActionTypes.GET_CLIENTS_ERROR:
            return {
                ...state,
                loading: false
            };
        case ClientsActionTypes.ADD_CLIENT:
            return {
                ...state,
                loading: true
            };
        case ClientsActionTypes.ADD_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case ClientsActionTypes.ADD_CLIENT_ERROR:
            return {
                ...state,
                loading: false
            };
         case ClientsActionTypes.DELETE_CLIENT:
            return {
                ...state,
                loading: true
            };
        case ClientsActionTypes.DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case ClientsActionTypes.DELETE_CLIENT_ERROR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
