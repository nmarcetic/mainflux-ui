import {DialogConfirmService} from '../../../common/components/dialog-confirm/dialog-confirm.service';
import { Component, Input, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'device-delete',
  providers: [DialogConfirmService],
  template:
  `<button type="button" md-button
      (click)="openDialog()">DELETE</button>`
})

export class DeviceDeleteComponent {
    @Input() device;

    public result: any;

    constructor(
        private dialogService: DialogConfirmService,
        private DeviceService: DeviceService
    ) {}

    public openDialog() {
    this.dialogService
      .confirm('Confirm Actiion', 'Are you sure you want to delete device ?')
      .subscribe(res => {
          this.result = res
          if(this.result) {
              this.DeviceService.removeDevice(this.device.id).subscribe(
                   response => {
                       // Emit list event
                      // EmitterService.get(this.listId).emit(comments);
                      console.log("Deleted", response);
                   },
                   err => {
                       // Log errors if any
                       console.log(err);
                   });
            }
    });
  }
}
