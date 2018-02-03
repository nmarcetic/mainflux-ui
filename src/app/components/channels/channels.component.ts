import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { getClients, State } from '../../core/store/index.reducer';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { getChannels } from '../../core/store/index.reducer';
import { Channel } from '../../core/store/channels/channels.reducer';
import { GetChannelsAction, AddChannelAction, EditChannelAction, DeleteChannelAction } from '../../core/store/channels/index';
import { AddChannelDialogComponent } from './add-channel-dialog/add-channel-dialog.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: Observable<Channel[]>;

  constructor(private store: Store<State>, private dialog: MatDialog) { }

  ngOnInit() {
    this.channels = this.store.select(getChannels);

    setTimeout(() => {
      this.store.dispatch(new GetChannelsAction());
    });
  }

  addChannel() {
    const dialogRef = this.dialog.open(AddChannelDialogComponent);

    dialogRef.componentInstance.submit.subscribe((channel: Channel) => {
      this.store.dispatch(new AddChannelAction(channel));
    });
  }

  editChannel(channel: Channel) {
    const dialogRef = this.dialog.open(AddChannelDialogComponent, {
      data: channel
    });

    dialogRef.componentInstance.submit.subscribe((editedChannel: Channel) => {
      this.store.dispatch(new EditChannelAction(editedChannel));
    });
  }

  deleteChannel(channel: Channel) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        question: 'Are you sure you want to delete the channel?'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(new DeleteChannelAction(channel));
      }
    });
  }
}
