import { DialogConfirmService } from './dialog-confirm.service';
import { MatDialogModule, MatButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialog }   from './dialog-confirm.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        ConfirmDialog,
    ],
    declarations: [
        ConfirmDialog,
    ],
    providers: [
        DialogConfirmService,
    ],
    entryComponents: [
        ConfirmDialog,
    ],
})
export class DialogConfirmModule { }
