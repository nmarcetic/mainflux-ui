import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard.routes';
// Services
import {DeviceService} from './services/device.service';
// Components
import { MainDashboardComponent } from './main';
import {DeviceListComponent} from './devices/list/device-list.component';
import {DeviceDeleteComponent} from './devices/delete/device.delete.component';
import {DashboardSideNavComponent} from './sidenav/dashboard-sidenav.component';

@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule, DashboardRoutingModule],
    declarations: [
        // Components
        MainDashboardComponent,
        DeviceListComponent,
        DeviceDeleteComponent,
        DashboardSideNavComponent,
    ],
    providers: [
        // Services
        DeviceService,
    ]
})

export class DashboardModule {}
