import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './../_views/_dashboard/_module/dashboard.module';
import { AdminRoutingModule } from '../_routing/admin-routing.module';
import { LoginModule } from '../../_login/module/login.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardModule,
    LoginModule
  ],
  declarations: []
})
export class AdminModule { }
