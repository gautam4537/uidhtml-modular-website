import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../_material-module/material.module';
import { AdminComponent } from '../admin.component';
import { LoginModule } from '../../_login/_module/login.module';
import { HeaderModule } from '../_shared/_components/_header/_module/header.module';
import { SidebarModule } from '../_shared/_components/_sidebar/_module/sidebar.module';
import { DashboardModule } from '../_views/_dashboard/_module/dashboard.module';
import { AddPostModule } from '../_views/_alter-post/_add-post/_module/add-post.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    LoginModule,
    HeaderModule,
    SidebarModule,
    MaterialModule,
    AddPostModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
