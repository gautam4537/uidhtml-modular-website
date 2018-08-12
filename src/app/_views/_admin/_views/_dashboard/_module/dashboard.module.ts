import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../../../_material-module/material.module';
import { HeaderModule } from './../../../_shared/_components/_header/_module/header.module';
import { SidebarModule } from './../../../_shared/_components/_sidebar/_module/sidebar.module';
import { DashboardComponent } from '../dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HeaderModule,
    SidebarModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
