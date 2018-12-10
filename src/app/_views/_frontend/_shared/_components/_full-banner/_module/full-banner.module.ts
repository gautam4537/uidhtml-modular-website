import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullBannerComponent } from '../full-banner.component';
import { MaterialModule } from '../../../../../../_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FullBannerComponent],
  declarations: [FullBannerComponent]
})
export class FullBannerModule { }
