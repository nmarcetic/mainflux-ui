import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';
import { AuthRoutingModule } from './auth.routes';
import { SignupComponent } from './signup';
import { LoginComponent } from './login';


@NgModule({
    imports: [CommonModule, FormsModule, MaterialModule, AuthRoutingModule],
    declarations: [
        SignupComponent,
        LoginComponent
    ],
})

export class AuthModule {}
