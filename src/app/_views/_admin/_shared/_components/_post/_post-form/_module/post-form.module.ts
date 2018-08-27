import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../../../_material-module/material.module';
import { CkEditorModule } from '../../../_ck-editor/_module/ck-editor.module';
import { PostFormComponent } from '../post-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CkEditorModule
  ],
  exports: [PostFormComponent],
  declarations: [PostFormComponent]
})
export class PostFormModule { }
