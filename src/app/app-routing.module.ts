import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';

import { ClientsComponent } from './components/clients/clients.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Route[] = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [PublicGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [PublicGuard]},
  { path: 'clients', component: ClientsComponent, canActivate: [ProtectedGuard]},
  { path: 'channels', component: ChannelsComponent, canActivate: [ProtectedGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
