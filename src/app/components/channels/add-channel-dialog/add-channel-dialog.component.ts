import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Channel } from '../../../core/store/channels/index';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    @Inject(MAT_DIALOG_DATA) public data: Channel
  ) { }

  ngOnInit() {
    this.addChannelForm = this.fb.group(
      {
        id: [''],
        name: ['', [Validators.required, Validators.minLength(5)]]
      }
    );

    if (this.data) {
      this.addChannelForm.patchValue(this.data);
    }
  }

  onAddChannel() {
    const channel = this.addChannelForm.value;
    channel.meta = {};

    this.submit.emit(channel);
    this.dialogRef.close();
  }

}
