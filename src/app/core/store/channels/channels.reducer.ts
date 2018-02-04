import { ActionReducer, Action } from '@ngrx/store';

import { ChannelsActionTypes, ChannelsActions } from './channels.actions';

export interface Channel {
    id?: '';
    name: string;
    connected: string[];
}

export interface State {
    channels: Channel[];
}

const initialState: State = {
    channels: []
};

export function reducer(
    state: State = initialState,
    action: ChannelsActions
) {
    switch (action.type) {
        case ChannelsActionTypes.GET_CHANNELS:
            return state;
        case ChannelsActionTypes.GET_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: [...action.payload]
            };
        default:
            return state;
    }
}
