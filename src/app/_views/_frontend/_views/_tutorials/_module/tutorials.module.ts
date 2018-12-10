import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from '../_routing/tutorials-routing.module';
import { TutorialsComponent } from '../tutorials.component';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule
  ],
  declarations: [TutorialsComponent]
})
export class TutorialsModule { }
