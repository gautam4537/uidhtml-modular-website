import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../dashboard.component';
import { DashboardRoutingModule } from '../_routing/dashboard-routing.module';
import { InfoLabelModule } from '../../../_shared/_components/_info-label/_module/info-label.module';
import { PostModule } from '../../../_shared/_components/_post/_module/post.module';
import { YoutubeVideoModule } from '../../../_shared/_components/_youtube-video/_module/youtube-video.module';
import { MessageModule } from '../../../_shared/_components/_message/_module/message.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfoLabelModule,
    PostModule,
    YoutubeVideoModule,
    MessageModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
