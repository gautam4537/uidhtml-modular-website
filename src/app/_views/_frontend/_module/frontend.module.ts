import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendComponent } from '../frontend.component';
import { HeaderModule } from '../_shared/_components/_header/_module/header.module';
import { SidebarModule } from '../_shared/_components/_sidebar/_module/sidebar.module';
import { FooterModule } from '../_shared/_components/_footer/_module/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    SidebarModule,
    FooterModule
  ],
  declarations: [FrontendComponent]
})
export class FrontendModule { }
