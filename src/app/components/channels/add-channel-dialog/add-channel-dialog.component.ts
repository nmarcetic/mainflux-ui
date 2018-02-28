import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { toJS } from 'mobx';

import { ClientsStore } from '../../../core/store/clients.store';
import { Channel } from '../../../core/store/models';

@Component({
  selector: 'app-add-channel-dialog',
  templateUrl: './add-channel-dialog.component.html',
  styleUrls: ['./add-channel-dialog.component.scss']
})
export class AddChannelDialogComponent implements OnInit {
  addChannelForm: FormGroup;
  @Output() submit: EventEmitter<Channel> = new EventEmitter<Channel>();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddChannelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Channel,
    public clientsStore: ClientsStore,
  ) { }

  ngOnInit() {
    this.addChannelForm = this.fb.group(
      {
        id: [''],
        name: ['', [Validators.required, Validators.minLength(5)]],
        connected: [[]]
      }
    );

    if (this.data) {
      this.addChannelForm.patchValue(toJS(this.data));
    }
  }

  onAddChannel() {
    const channel = this.addChannelForm.value;
    channel.meta = {};

    this.submit.emit(channel);
    this.dialogRef.close();
  }

}
