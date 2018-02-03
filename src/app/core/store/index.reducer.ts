import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import * as clients from './clients';
import * as channels from './channels';
import * as appLayout from './app-layout';
import * as auth from './auth';

export interface State {
    appLayout: appLayout.State;
    auth: auth.State;
    clients: clients.State;
    channels: channels.State;
    routerReducer: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    appLayout: appLayout.reducer,
    auth: auth.reducer,
    routerReducer: routerReducer,
    clients: clients.reducer,
    channels: channels.reducer,
};

export const getClientsState = (state: State) => state.clients;
export const getClients = createSelector(getClientsState, clients.getClients);

export const getChannelsState = (state: State) => state.channels;
export const getChannels = createSelector(getChannelsState, channels.getChannels);

export const getAuthState = (state: State) => state.auth;
export const getAuthError = createSelector(getAuthState, auth.getAuthError);

export const getAppLayoutState = (state: State) => state.appLayout;
export const getLoading = createSelector(getAppLayoutState, appLayout.getLoading);
