import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

import {DeviceService} from '../../services/device.service';
import {Device} from '../device.model';

@Component({
  selector: 'device-create',
  providers: [DeviceService],
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})

export class DeviceCreateComponent {
    public result: any;
    public form: FormGroup;
    public device: Device;
    public name = new FormControl('',  Validators.required);

    constructor(
        private DeviceService: DeviceService,
        public dialogRef: MdDialogRef<DeviceCreateComponent>
    ) {}


    public addDevice() {
        this.DeviceService.addDevice(this.device).subscribe(
             response => {
                 // TODO: Emit create event
                console.log("Created", response);
                 this.dialogRef.close();
             },
             err => {
                 // Log errors if any
                 console.log(err);
             });
    }
}
