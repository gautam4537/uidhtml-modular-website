import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../_views/_dashboard/_module/dashboard.module';
import { LoginModule } from '../../_login/_module/login.module';
import { AdminComponent } from '../admin.component';
import { HeaderModule } from '../_shared/_components/_header/_module/header.module';
import { SidebarModule } from '../_shared/_components/_sidebar/_module/sidebar.module';
import { MaterialModule } from '../../../_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    LoginModule,
    HeaderModule,
    SidebarModule,
    MaterialModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
