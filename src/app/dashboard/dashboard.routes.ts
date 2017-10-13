import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main';
import { DeviceListComponent } from './devices/list/device-list.component';
import { DeviceCreateComponent } from './devices/create/device-create.component';
// Define our Auth Routes
const routes: Routes = [
  // Temporary set /dashboard as root path
  { path:   'dashboard',  component: MainDashboardComponent},
  { path: 'dashboard/evices/list', component: DeviceListComponent},
  { path: 'dashboard/evices/add', component: DeviceCreateComponent},
  //{ path: 'devices/edit/:id', component: DeviceCreateComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
