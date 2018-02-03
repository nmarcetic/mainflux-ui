import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
    authError: string;
    timestamp: number;
    authenticated: boolean;
}

const initialState: State = {
    authError: '',
    authenticated: false,
    timestamp: Date.now()
};

export function reducer(
    state: State = initialState,
    action: AuthActions
) {
    switch (action.type) {
        case AuthActionTypes.SIGNUP_ERROR:
            return {
                ...state,
                authError: action.payload.error,
                timestamp: Date.now()
            };
        case AuthActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                authError: ''
            };
        case AuthActionTypes.LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload.error,
                timestamp: Date.now()
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                authError: ''
            };
        default:
            return state;
    }
}
