import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubeVideoComponent } from '../youtube-video.component';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { LabelButtonModule } from '../../_material-elements/_buttons/_label-button/_module/label-button.module';
import { IconMenuModule } from '../../_material-elements/_icon-menu/_module/icon-menu.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LabelButtonModule,
    IconMenuModule,
    YoutubePlayerModule
  ],
  exports: [YoutubeVideoComponent],
  declarations: [YoutubeVideoComponent]
})
export class YoutubeVideoModule { }
