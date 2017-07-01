import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main';

// Define our Auth Routes
const routes: Routes = [
  // Temporary set /dashboard as root path
  { path: '',  component: MainDashboardComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
