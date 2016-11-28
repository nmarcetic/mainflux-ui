import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard.routes';
import { MainDashboardComponent } from './main';

@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule, DashboardRoutingModule],
    declarations: [
        MainDashboardComponent
    ],
})

export class DashboardModule {}
