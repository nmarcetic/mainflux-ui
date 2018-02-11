import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { toJS } from 'mobx';
import { Observable } from 'rxjs/Observable';

import { Channel } from '../../core/store/models';
import { State as AppState } from '../../core/store/state';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AddChannelDialogComponent } from './add-channel-dialog/add-channel-dialog.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: Observable<Channel[]>;

  constructor(
    private dialog: MatDialog,
    public stateStore: AppState,
  ) { }

  ngOnInit() {
    this.stateStore.getChannels();
    this.stateStore.getClients();
  }

  addChannel() {
    const dialogRef = this.dialog.open(AddChannelDialogComponent);

    dialogRef.componentInstance.submit.subscribe((channel: Channel) => {
      this.stateStore.addChannel(channel);
    });
  }

  editChannel(channel: Channel) {
    const dialogRef = this.dialog.open(AddChannelDialogComponent, {
      data: channel
    });

    dialogRef.componentInstance.submit.subscribe((editedChannel: Channel) => {
      this.stateStore.editChannel(toJS(editedChannel));
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
        this.stateStore.deleteChannel(channel);
      }
    });
  }
}
