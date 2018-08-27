import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message.component';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { IconMenuModule } from '../../_material-elements/_icon-menu/_module/icon-menu.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    IconMenuModule
  ],
  exports: [MessageComponent],
  declarations: [MessageComponent]
})
export class MessageModule { }
