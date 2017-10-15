import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A11yModule } from '@angular/cdk/a11y';
import { CompatibilityModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
// import { OverlayModule } from '@angular/material';
// import { PlatformModule } from '@angular/material';
// import { StyleModule } from '@angular/material';

const MATERIAL_MODULES = [
  CommonModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,

  // These modules include providers.
  A11yModule,
  CompatibilityModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  // OverlayModule,
  // PlatformModule,
  // StyleModule
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class DashfluxMaterialModule { }
