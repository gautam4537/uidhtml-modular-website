import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../dashboard.component';
import { DashboardRoutingModule } from '../_routing/dashboard-routing.module';
import { InfoLabelModule } from '../../../_shared/_components/_info-label/_module/info-label.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfoLabelModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
