import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { MaterialModule } from '../../../../../../_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, MaterialModule],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
