import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { ClientsActionTypes } from '../store/clients/clients.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { MockClientsService } from '../services/mock-clients.service';
import { GetClientsSuccessAction, AddClientSuccessAction, GetClientsAction } from '../store/clients/index';
import { ChannelsService } from '../services/channels/channels.service';
import { ChannelsActionTypes, GetChannelsSuccessAction, GetChannelsAction } from '../store/channels/index';

@Injectable()
export class ChannelsEffects {
    constructor(
        private actions$: Actions,
        private channelsService: ChannelsService
    ) { }

    @Effect()
    getChannels: Observable<Action> = this.actions$
        .ofType(ChannelsActionTypes.GET_CHANNELS)
        .map(toPayload)
        .switchMap(payload => {
            return this.channelsService.getChannels()
                .switchMap(response => {
                    return of(new GetChannelsSuccessAction((<any>response).channels));
                });
        });

    @Effect()
    addChannel: Observable<Action> = this.actions$
        .ofType(ChannelsActionTypes.ADD_CHANNEL)
        .map(toPayload)
        .switchMap(channel => {
            return this.channelsService.addChannel(channel)
                .switchMap(() => {
                    return of(new GetChannelsAction());
                });
        });

    @Effect()
    deleteChannel: Observable<Action> = this.actions$
        .ofType(ChannelsActionTypes.DELETE_CHANNEL)
        .map(toPayload)
        .switchMap(channel => {
            return this.channelsService.deleteChannel(channel)
                .switchMap(() => {
                    return of(new GetChannelsAction());
                });
        });

    @Effect()
    editClient: Observable<Action> = this.actions$
        .ofType(ChannelsActionTypes.EDIT_CHANNEL)
        .map(toPayload)
        .switchMap(channel => {
            return this.channelsService.editChannel(channel)
                .switchMap(() => {
                    return of(new GetChannelsAction());
                });
        });
}
