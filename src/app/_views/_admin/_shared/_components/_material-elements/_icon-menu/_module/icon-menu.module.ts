import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconMenuComponent } from '../icon-menu.component';
import { MaterialModule } from '../../../../../../../_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [IconMenuComponent],
  declarations: [IconMenuComponent]
})
export class IconMenuModule { }
