import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendComponent } from '../frontend.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FrontendComponent]
})
export class FrontendModule { }
