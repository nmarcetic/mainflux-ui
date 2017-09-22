import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AuthModule, AUTH_SERVICE, PUBLIC_FALLBACK_PAGE_URI, PROTECTED_FALLBACK_PAGE_URI } from 'ngx-auth';
import { DashfluxMaterialModule } from '../common/modules/dashflux.material.module';
import { FormsModule } from '@angular/forms'
import { AuthRoutingModule } from './auth.routes';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';

import { AuthenticationService } from './services/auth.service';
import { TokenStorage } from './services/token.storage.service';

export function factory(authenticationService: AuthenticationService) {
  return authenticationService;
}


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        AuthModule,
        FormsModule,
        AuthRoutingModule,
        DashfluxMaterialModule
    ],
    providers: [
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
    declarations: [
        SignupComponent,
        LoginComponent
    ],
})

export class AuthenticationModule {}
