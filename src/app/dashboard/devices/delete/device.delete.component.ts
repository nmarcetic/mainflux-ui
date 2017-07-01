import {DialogConfirmService} from '../../../common/dialog-confirm/dialog-confirm.service';
import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'device-delete',
  template:
  `<button type="button" md-button
      (click)="openDialog()">DELETE</button>`
})

export class DeviceDeleteComponent {

    public result: any;

    constructor(private dialogService: DialogConfirmService) { }

    public openDialog() {
    this.dialogService
      .confirm('Confirm Actiion', 'Are you sure you want to delete device ?')
      .subscribe(res => this.result = res);
  }
}
