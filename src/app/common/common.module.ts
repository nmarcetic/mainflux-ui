import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DialogConfirmModule } from './components/dialog-confirm/dialog-confirm.module';

@NgModule({
    imports: [CommonModule, FormsModule, DialogConfirmModule],
    declarations: [
        // Components
    ],
    providers: [
        // Services
    ]
})

export class AppCommonModule {}
