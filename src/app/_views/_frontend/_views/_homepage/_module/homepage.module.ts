import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from '../_routing/homepage-routing.module';
import { HomepageComponent } from '../homepage.component';
import { MaterialModule } from 'src/app/_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
