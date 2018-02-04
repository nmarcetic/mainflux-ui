import { MAT_DIALOG_DATA } from '@angular/material';
import { Client } from '../../../core/store/clients';
import { Component, OnInit, Output, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent implements OnInit {
  addClientForm: FormGroup;
  @Output() submit: EventEmitter<Client> = new EventEmitter<Client>();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client
  ) { }

  ngOnInit() {
    this.addClientForm = this.fb.group(
      {
        id: [''],
        type: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(5)]]
      }
    );

    if (this.data) {
      this.addClientForm.patchValue(this.data);
    }
  }

  onAddClient() {
    const client = this.addClientForm.value;
    client.meta = {};

    this.submit.emit(client);
    this.dialogRef.close();
  }
}
