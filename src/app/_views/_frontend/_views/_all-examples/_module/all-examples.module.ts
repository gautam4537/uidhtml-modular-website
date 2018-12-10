import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllExamplesRoutingModule } from '../_routing/all-examples-routing.module';
import { AllExamplesComponent } from '../all-examples.component';
import { FullBannerModule } from '../../../_shared/_components/_full-banner/_module/full-banner.module';
import { RecentExamplesModule } from '../../_recent-examples/module/recent-examples.module';

@NgModule({
  imports: [
    CommonModule,
    AllExamplesRoutingModule,
    FullBannerModule,
    RecentExamplesModule
  ],
  declarations: [AllExamplesComponent]
})
export class AllExamplesModule { }
