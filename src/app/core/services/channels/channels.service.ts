import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Channel } from '../../store/models';

@Injectable()
export class ChannelsService {

  constructor(private http: HttpClient) { }

  getChannels() {
    return this.http.get(environment.channelsUrl);
  }

  addChannel(channel: Channel) {
    return this.http.post(environment.channelsUrl, channel);
  }

  deleteChannel(channel: Channel) {
    return this.http.delete(environment.channelsUrl + '/' + channel.id);
  }

  editChannel(channel: Channel) {
    return this.http.put(environment.channelsUrl + '/' + channel.id, channel);
  }
}
