import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

import { ChannelsService } from '../services/channels/channels.service';
import { Channel } from './models';
import { UiStore } from './ui.store';

@Injectable()
export class ChannelsStore {
    @observable channels: Channel[] = [];

    constructor(
        private uiState: UiStore,
        private channelsService: ChannelsService,
    ) { }

    @action
    getChannels() {
        this.uiState.loading = true;
        this.channelsService.getChannels()
            .subscribe((payload: any) => {
                this.uiState.loading = false;
                this.channels = payload.channels;
            });
    }

    @action
    addChannel(channel: Channel) {
        this.uiState.loading = true;
        this.channelsService.addChannel(channel)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getChannels();
            });
    }

    @action
    editChannel(channel: Channel) {
        this.uiState.loading = true;
        this.channelsService.editChannel(channel)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getChannels();
            });
    }

    @action
    deleteChannel(channel: Channel) {
        this.uiState.loading = true;
        this.channelsService.deleteChannel(channel)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getChannels();
            });
    }
}