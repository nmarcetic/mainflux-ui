import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Channel } from '../../store/models';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { Subscribable } from 'rxjs/Observable';

interface ChannelsPayload {
  channels: Channel[];
}

@Injectable()
export class ChannelsService {

  constructor(private http: HttpClient) { }

  getChannels() {
    return this.http.get(environment.channelsUrl).switchMap((payload: ChannelsPayload) => {
      const allChannels = forkJoin(this.createChannelsRequests(payload.channels));
      return allChannels;
    }).switchMap((channels: Channel[]) => {
      debugger;
      return Observable.of(channels);
    });
  }

  createChannelsRequests(channels) {
    return channels.map((channel => this.http.get(environment.channelsUrl + '/' + channel.id)));
  }

  addChannel(channel: Channel) {
    const payload = {
      name: channel.name
    };

    return this.http.post(environment.channelsUrl, payload, { observe: 'response' })
      .switchMap((res) => {
        const location = res.headers.get('Location');
        const id = location.replace('/channels/', '');

        return forkJoin(this.createConnectRequests(id, channel.connected));
      });
  }

  deleteChannel(channel: Channel) {
    return this.http.delete(environment.channelsUrl + '/' + channel.id);
  }

  editChannel(channel: Channel) {
    const payload = {
      name: channel.name
    };

    const editChannel = this.http.put(environment.channelsUrl + '/' + channel.id, payload);

    return editChannel.switchMap(() => {
      return forkJoin(this.createConnectRequests(channel.id, channel.connected));
    });
  }

  createConnectRequests(channelId: string , connected) {
    return connected.map((connection) => {
      return this.http.put(environment.channelsUrl + '/' + channelId + '/clients/' + connection, {});
    });
  }
}
