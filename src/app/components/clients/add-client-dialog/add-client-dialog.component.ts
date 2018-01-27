import { Client } from '../../../core/store/clients';
import { Component, OnInit, Output } from '@angular/core';
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
  @Output() addClient: EventEmitter<Client> = new EventEmitter<Client>();

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddClientDialogComponent>) { }

  ngOnInit() {
    this.addClientForm = this.fb.group(
      {
        type: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
  }

  onAddClient() {
    let client = this.addClientForm.value;
    client.meta = {};

    this.addClient.emit(client);
    this.dialogRef.close();
  }
}
