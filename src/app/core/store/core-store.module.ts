import { reducers } from './index.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers)
  ]
})

export class CoreStoreModule { }
