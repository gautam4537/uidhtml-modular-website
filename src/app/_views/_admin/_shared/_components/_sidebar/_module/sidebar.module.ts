import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { SidebarComponent } from '../sidebar.component';
import { Keyvalue } from '../../../_pipes/get-object-key-value';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [MaterialModule, RouterModule, SidebarComponent],
  declarations: [SidebarComponent, Keyvalue]
})
export class SidebarModule { }
