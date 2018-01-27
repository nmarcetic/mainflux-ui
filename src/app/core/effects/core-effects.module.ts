import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { ClientsEffects } from './clients.effects';
import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';


@NgModule({
  imports: [
    EffectsModule.forRoot([ClientsEffects, RouterEffects, AuthEffects])
  ],
  declarations: []
})
export class CoreEffectsModule { }
