import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../_material-module/material.module';

import { PostListRoutingModule } from '../_routing/post-list-routing.module';
import { PostListComponent } from '../post-list.component';
import { DataTableModule } from '../../../../../_common-shared/_material-table/_module/data-table.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PostListRoutingModule,
    DataTableModule
  ],
  declarations: [PostListComponent]
})
export class PostListModule { }
