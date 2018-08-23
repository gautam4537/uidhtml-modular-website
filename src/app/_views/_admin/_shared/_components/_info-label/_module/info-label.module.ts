import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { InfoLabelComponent } from '../info-label.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [InfoLabelComponent],
  declarations: [InfoLabelComponent]
})
export class InfoLabelModule { }
