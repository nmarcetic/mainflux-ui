import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { ClientsEffects } from './clients.effects';
import { RouterEffects } from './router.effects';
import { AuthEffects } from './auth.effects';
import { ChannelsEffects } from './channels.effects';


@NgModule({
  imports: [
    EffectsModule.forRoot([ClientsEffects, ChannelsEffects, RouterEffects, AuthEffects])
  ],
  declarations: []
})
export class CoreEffectsModule { }
