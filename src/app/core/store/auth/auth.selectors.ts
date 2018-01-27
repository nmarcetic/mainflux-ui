import { State } from './auth.reducer';

export const getAuthError = (state: State) => state.authError;
