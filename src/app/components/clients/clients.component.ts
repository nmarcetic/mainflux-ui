import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { toJS } from 'mobx';
import { Observable } from 'rxjs/Observable';

import { Client } from '../../core/store/models';
import { State } from '../../core/store/state';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Observable<Client[]>;

  constructor(
    private stateStore: State,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.stateStore.getClients();
    this.stateStore.getChannels();
  }

  addClient() {
    const dialogRef = this.dialog.open(AddClientDialogComponent);

    dialogRef.componentInstance.submit.subscribe((client: Client) => {
      this.stateStore.addClient(client);
    });
  }

  editClient(client: Client) {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      data: client
    });

    dialogRef.componentInstance.submit.subscribe((editedClient: Client) => {
      this.stateStore.editClient(toJS(editedClient));
    });
  }

  deleteClient(client: Client) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        question: 'Are you sure you want to delete the client?'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.stateStore.deleteClient(toJS(client));
      }
    });
  }
}
