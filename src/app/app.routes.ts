import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './auth';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: '**',    component: NoContentComponent },
];
