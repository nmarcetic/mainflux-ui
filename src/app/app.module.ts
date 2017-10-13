import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import 'hammerjs';

// Import app custom modules
import { AppRoutingModule } from './app.routes';
import { AuthenticationModule } from './auth';
import { DashboardModule } from './dashboard';
import {AppCommonModule} from './common/common.module';
// Import app components
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import custom material module (check material documentation)
import { DashfluxMaterialModule } from './common/modules/dashflux.material.module';

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashfluxMaterialModule,
    // Import our custom App modules
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
