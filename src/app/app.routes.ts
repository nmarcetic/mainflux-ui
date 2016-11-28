import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import { AuthModule } from './auth';
import { DashboardModule } from './dashboard';

// Define our Application Routes
const routes: Routes = [
  // Not found page
  { path: '**',    component: NoContentComponent },
];

@NgModule({
    imports: [AuthModule, DashboardModule, RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})

export class AppRoutingModule { }
