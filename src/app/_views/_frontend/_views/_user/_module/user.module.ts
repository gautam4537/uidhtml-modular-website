import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user.component';
import { UserRoutingModule } from '../_routing/user-routing.module';
import { LoginModule } from '../../../../_login/_module/login.module';
import { DashboardModule } from '../_views/_dashboard/_module/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    DashboardModule,
    LoginModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
