import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { ClientsActionTypes } from '../store/clients/clients.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { MockClientsService } from '../services/mock-clients.service';
import { GetClientsSuccessAction, AddClientSuccessAction, GetClientsAction } from '../store/clients/index';
import { ClientsService } from '../services/clients/clients.service';

@Injectable()
export class ClientsEffects {
    constructor(
        private actions$: Actions,
        private clientsService: ClientsService
    ) {}

    @Effect()
    getDevices: Observable<Action> = this.actions$
        .ofType(ClientsActionTypes.GET_CLIENTS)
        .map(toPayload)
        .switchMap(payload => {
            return this.clientsService.getClients()
                .switchMap(response => of(new GetClientsSuccessAction((<any>response).clients)));
        });

    @Effect()
    addClient: Observable<Action> = this.actions$
        .ofType(ClientsActionTypes.ADD_CLIENT)
        .map(toPayload)
        .switchMap(client => {
            return this.clientsService.addClient(client)
                .switchMap(() => {
                    return of(new GetClientsAction());
                });
        });

    @Effect()
    deleteClient: Observable<Action> = this.actions$
        .ofType(ClientsActionTypes.DELETE_CLIENT)
        .map(toPayload)
        .switchMap(client => {
            return this.clientsService.deleteClient(client)
                .switchMap(() => {
                    return of(new GetClientsAction());
                });
        });
}
