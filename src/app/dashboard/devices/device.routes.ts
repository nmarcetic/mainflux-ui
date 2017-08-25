import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceCreateComponent } from './create/device-create.component';

// Define our Auth Routes
const routes: Routes = [
  // Temporary set /dashboard as root path
  { path:   '/add',  component: DeviceCreateComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
