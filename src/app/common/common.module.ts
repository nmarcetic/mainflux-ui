import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';

import { DialogConfirmModule } from './dialog-confirm/dialog-confirm.module';

@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule, DialogConfirmModule],
    declarations: [
        // Components
    ],
    providers: [
        // Services
    ]
})

export class AppCommonModule {}
