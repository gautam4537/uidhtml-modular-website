import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { HeaderComponent } from '../header.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
