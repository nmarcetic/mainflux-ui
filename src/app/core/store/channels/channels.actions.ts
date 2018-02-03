import { Channel } from './channels.reducer';
import { Action } from '@ngrx/store';

export enum ChannelsActionTypes {
    GET_CHANNELS = '[Channels] GET_CHANNELS',
    GET_CHANNELS_SUCCESS = '[Channels] GET_CHANNELS_SUCCESS',
    GET_CHANNELS_ERROR = '[Channels] GET_CHANNELS_ERROR',
    ADD_CHANNEL = '[Channels] ADD_CHANNEL',
    ADD_CHANNEL_SUCCESS = '[Channels] ADD_CHANNEL_SUCCESS',
    ADD_CHANNEL_ERROR = '[Channels] ADD_CHANNEL_ERROR',
    DELETE_CHANNEL = '[Channels] DELETE_CHANNEL',
    DELETE_CHANNEL_SUCCESS = '[Channels] DELETE_CHANNEL_SUCCESS',
    DELETE_CHANNEL_ERROR = '[Channels] DELETE_CHANNEL_ERROR',
    EDIT_CHANNEL = '[Channels] EDIT_CHANNEL',
    EDIT_CHANNEL_SUCCESS = '[Channels] EDIT_CHANNEL_SUCCESS',
    EDIT_CHANNEL_ERROR = '[Channels] EDIT_CHANNEL_ERROR',
}

export class GetChannelsAction implements Action {
    readonly type = ChannelsActionTypes.GET_CHANNELS;

    constructor(public payload?) { }
}

export class GetChannelsSuccessAction implements Action {
    readonly type = ChannelsActionTypes.GET_CHANNELS_SUCCESS;

    constructor(public payload?) { }
}

export class GetChannelsErrorAction implements Action {
    readonly type = ChannelsActionTypes.GET_CHANNELS_ERROR;

    constructor(public payload?) { }
}

export class AddChannelAction implements Action {
    readonly type = ChannelsActionTypes.ADD_CHANNEL;

    constructor(public payload: Channel) { }
}

export class AddChannelSuccessAction implements Action {
    readonly type = ChannelsActionTypes.ADD_CHANNEL_SUCCESS;

    constructor(public payload?) { }
}

export class AddChannelErrorAction implements Action {
    readonly type = ChannelsActionTypes.ADD_CHANNEL_ERROR;

    constructor(public payload?) { }
}

export class DeleteChannelAction implements Action {
    readonly type = ChannelsActionTypes.DELETE_CHANNEL;

    constructor(public payload: Channel) { }
}

export class DeleteChannelSuccessAction implements Action {
    readonly type = ChannelsActionTypes.DELETE_CHANNEL_SUCCESS;

    constructor(public payload?) { }
}

export class DeleteChannelErrorAction implements Action {
    readonly type = ChannelsActionTypes.DELETE_CHANNEL_ERROR;

    constructor(public payload?) { }
}

export class EditChannelAction implements Action {
    readonly type = ChannelsActionTypes.EDIT_CHANNEL;

    constructor(public payload: Channel) { }
}

export class EditChannelSuccessAction implements Action {
    readonly type = ChannelsActionTypes.EDIT_CHANNEL_SUCCESS;

    constructor(public payload?) { }
}

export class EditChannelErrorAction implements Action {
    readonly type = ChannelsActionTypes.EDIT_CHANNEL_ERROR;

    constructor(public payload?) { }
}

export type ChannelsActions
                        = GetChannelsAction
                        | GetChannelsSuccessAction
                        | GetChannelsErrorAction
                        | AddChannelAction
                        | AddChannelSuccessAction
                        | AddChannelErrorAction
                        | DeleteChannelAction
                        | DeleteChannelSuccessAction
                        | DeleteChannelErrorAction
                        | EditChannelAction
                        | EditChannelSuccessAction
                        | EditChannelErrorAction;
