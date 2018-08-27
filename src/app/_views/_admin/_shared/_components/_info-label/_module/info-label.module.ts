import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { InfoLabelComponent } from '../info-label.component';
import { LabelButtonModule } from '../../_material-elements/_buttons/_label-button/_module/label-button.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LabelButtonModule
  ],
  exports: [InfoLabelComponent],
  declarations: [InfoLabelComponent]
})
export class InfoLabelModule { }
