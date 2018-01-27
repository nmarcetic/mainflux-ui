import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreStoreModule } from './core/store/core-store.module';
import { CoreEffectsModule } from './core/effects/core-effects.module';
import { MaterialModule } from './core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import './rxjs-extensions.ts';
import 'hammerjs';

import { ChannelsComponent } from './components/channels/channels.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MockAuthService } from './core/services/mock-auth.service';
import { MockClientsService } from './core/services/mock-clients.service';
import { ClientsService } from './core/services/clients/clients.service';
import { LoginComponent } from './components/auth/login/login.component';
import { AddClientDialogComponent } from './components/clients/add-client-dialog/add-client-dialog.component';
import { ClientCardComponent } from './components/clients/client-card/client-card.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorage } from './core/services/auth/token-storage.service';
import { AuthenticationService } from './core/services/auth/authentication.service';
import { PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI, AUTH_SERVICE } from 'ngx-auth';
import { AuthModule } from 'ngx-auth';

export function factory(authenticationService: AuthenticationService) {
  return authenticationService;
}

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ChannelsComponent,
    SignupComponent,
    LoginComponent,
    AddClientDialogComponent,
    ClientCardComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreStoreModule,
    CoreEffectsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    MockAuthService,
    MockClientsService,
    ClientsService,
    TokenStorage,
    AuthenticationService,
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    {
      provide: AUTH_SERVICE,
      deps: [AuthenticationService],
      useFactory: factory
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddClientDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class AppModule { }
