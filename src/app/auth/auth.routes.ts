import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';

// Define our Auth Routes
const routes: Routes = [
  // Temporary disable root path, while we work without Auth
  { path: '',  component: LoginComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'signup',  component: SignupComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})

export class AuthRoutingModule { }
