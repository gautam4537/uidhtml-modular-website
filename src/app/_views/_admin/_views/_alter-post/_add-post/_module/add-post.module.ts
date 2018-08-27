import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../_material-module/material.module';
import { AddPostRoutingModule } from '../_routing/add-post-routing.module';
import { AddPostComponent } from '../add-post.component';
import { PostFormModule } from '../../../../_shared/_components/_post/_post-form/_module/post-form.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AddPostRoutingModule,
    PostFormModule
  ],
  declarations: [AddPostComponent]
})
export class AddPostModule { }
