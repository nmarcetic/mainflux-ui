import { ClientsActionTypes, ClientsActions } from './clients.actions';
import { ActionReducer, Action } from '@ngrx/store';

export interface Client {
    id?: '';
    type: string;
    name: string;
    meta: object;
}

export interface State {
    clients: Client[];
}

const initialState: State = {
    clients: []
};

export function reducer(
    state: State = initialState,
    action: ClientsActions
) {
    switch (action.type) {
        case ClientsActionTypes.GET_CLIENTS:
            return state;
        case ClientsActionTypes.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: [...action.payload]
            };
        default:
            return state;
    }
}
