import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './auth';

const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: '**',    component: NoContentComponent },
];


//import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
