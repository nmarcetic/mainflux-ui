import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './dialog-confirm.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogConfirmService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
