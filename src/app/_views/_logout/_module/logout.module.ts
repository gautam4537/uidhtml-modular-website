import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../_material-module/material.module';
import { LogoutRoutingModule } from '../_routing/logout-routing.module';
import { LogoutComponent } from '../logout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LogoutRoutingModule
  ],
  exports: [LogoutComponent],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
