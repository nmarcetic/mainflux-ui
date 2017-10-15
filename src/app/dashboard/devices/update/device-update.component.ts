import { Component, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {DeviceService} from '../../services/device.service';
import {Device} from '../device.interface';

@Component({
  selector: 'device-update',
  providers: [DeviceService],
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.scss']
})

export class DeviceUpdateComponent {
    public form: FormGroup;
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    private dialogRef: MatDialogRef<DeviceUpdateComponent>;
    @Output() updated: EventEmitter<any> = new EventEmitter();

    constructor(
        private DeviceService: DeviceService,
        public dialog: MatDialogRef<DeviceUpdateComponent>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public device: any
       ){
        }

    ngOnInit() {
        this.form = this.fb.group({
                name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
                description: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        });
        (<FormGroup>this.form)
            .patchValue(this.device, { onlySelf: true });
    }

    updateDevice(model: Device, isValid: boolean) {
        if(isValid) {
            this.DeviceService.updateDevice(this.device.id, model).subscribe(
                response => {
                    this.updated.emit(response);
                    this.dialog.close();
                },
                err => {
                    console.log(err);
                });
        }
    }


}
