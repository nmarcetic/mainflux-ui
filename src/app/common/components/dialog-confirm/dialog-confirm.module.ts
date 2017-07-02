import { DialogConfirmService } from './dialog-confirm.service';
import { MdDialogModule, MdButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialog }   from './dialog-confirm.component';

@NgModule({
    imports: [
        MdDialogModule,
        MdButtonModule,
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
