import { Component, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material';

import {DeviceService} from '../../services/device.service';
import {Device} from '../device.interface';

@Component({
  selector: 'device-create',
  providers: [DeviceService],
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss']
})

export class DeviceCreateComponent {
    public form: FormGroup;
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    private dialogRef: MatDialogRef<DeviceCreateComponent>;
    @Output()
    created: EventEmitter<any> = new EventEmitter();

    constructor(
        private DeviceService: DeviceService,
        public dialog: MatDialogRef<DeviceCreateComponent>,
        private fb: FormBuilder
       ){
        }


    ngOnInit() {
        this.form = this.fb.group({
                name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                description: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        });
    }

    addDevice(model: Device, isValid: boolean) {
        if(isValid) {
            this.DeviceService.addDevice(model).subscribe(
                response => {
                    this.created.emit(response);
                    this.dialog.close();
                },
                err => {
                    console.log(err);
                });
        }
    }


}
