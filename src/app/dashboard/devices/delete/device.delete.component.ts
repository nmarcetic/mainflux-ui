import {DialogConfirmService} from '../../../common/components/dialog-confirm/dialog-confirm.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'device-delete',
  providers: [DialogConfirmService],
  template:
  `<button md-mini-fab color="warn" type="button" md-button
      (click)="openDialog()">
      <md-icon>delete_forever</md-icon>
     </button>`
})

export class DeviceDeleteComponent {
    @Input() device;
    @Output() deleted: EventEmitter<any> = new EventEmitter();

    public result: any;

    constructor(
        private dialogService: DialogConfirmService,
        private DeviceService: DeviceService
    ) {}

    public openDialog() {
        console.log("to delete", this.device)
    this.dialogService
      .confirm('Confirm Action', `Are you sure you want to delete device ${this.device.name} ?`)
      .subscribe(res => {
          this.result = res
          if(this.result) {
              this.DeviceService.removeDevice(this.device.id).subscribe(
                   response => {
                       //TODO: Emit delete event
                      this.deleted.emit(this.device);
                   },
                   err => {
                       // Log errors if any
                       console.log(err);
                   });
            }
    });
  }
}
