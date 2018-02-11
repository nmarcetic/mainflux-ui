import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { action, observable } from 'mobx';

import { AuthenticationService } from '../services/auth/authentication.service';
import { ChannelsService } from '../services/channels/channels.service';
import { ClientsService } from '../services/clients/clients.service';
import { Channel, Client, User } from './models';

@Injectable()
export class State {
    constructor(
        private authenticationService: AuthenticationService,
        private clientsService: ClientsService,
        private channelsService: ChannelsService,
        private router: Router,
    ) {
        this.authenticationService.isAuthorized().subscribe(
            (isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            }
        );
    }

    @observable loading = false;
    @observable isAuthenticated = false;
    @observable clients: Client[] = [];
    @observable channels: Channel[] = [];
    @observable authError = '';

    @action
    login(user: User) {
        this.loading = true;

        this.authenticationService.login(user)
            .subscribe(() => {
                this.loading = false;
                this.isAuthenticated = true;

                this.router.navigate(['/clients']);
            },
            (error) => {
                this.loading = false;
                this.authError = error;
            }
        );
    }

    @action
    signup(user: User) {
        this.loading = true;

        this.authenticationService.signup(user)
        .subscribe(() => {
                this.login(user);
            },
            (error) => {
                this.loading = false;
                this.authError = error;
            });
    }

    @action
    logout() {
        this.authenticationService.logout();
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
    }

    @action
    goToSignup() {
        this.router.navigate(['/signup']);
    }

    @action
    goToLogin() {
        this.router.navigate(['/login']);
    }

    @action
    getClients() {
        this.loading = true;
        this.clientsService.getClients()
            .subscribe((payload: any) => {
                this.loading = false;
                this.clients = payload.clients;
            });
    }

    @action
    addClient(client: Client) {
        this.loading = true;
        this.clientsService.addClient(client)
        .subscribe(() => {
            this.getClients();
        });
    }

    @action
    editClient(client: Client) {
        this.loading = true;
        this.clientsService.editClient(client)
        .subscribe(() => {
            this.loading = false;
            this.getClients();
        });
    }

    @action
    deleteClient(client: Client) {
        this.loading = true;
        this.clientsService.deleteClient(client)
            .subscribe(() => {
                this.loading = false;
                this.getClients();
            });
    }

    @action
    getChannels() {
        this.loading = true;
        this.channelsService.getChannels()
            .subscribe((payload: any) => {
                this.loading = false;
                this.channels = payload.channels;
            });
    }

    @action
    addChannel(channel: Channel) {
        this.loading = true;
        this.channelsService.addChannel(channel)
        .subscribe(() => {
            this.getChannels();
        });
    }

    @action
    editChannel(channel: Channel) {
        this.loading = true;
        this.channelsService.editChannel(channel)
        .subscribe(() => {
            this.loading = false;
            this.getChannels();
        });
    }

    @action
    deleteChannel(channel: Channel) {
        this.loading = true;
        this.channelsService.deleteChannel(channel)
            .subscribe(() => {
                this.loading = false;
                this.getChannels();
            });
    }
}
