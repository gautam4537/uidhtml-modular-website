import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../../../_material-module/material.module';
import { CkEditorModule } from '../../../_ck-editor/_module/ck-editor.module';
import { PostFormComponent } from '../post-form.component';
import { DdmmyyDatePipe } from '../../../../../../../_common-shared/_pipes/ddmmyy-date.pipe';
import { MaterialDialogueModule } from '../../../../../../../_common-shared/_material-dialogue/_module/material-dialogue.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CkEditorModule,
    MaterialDialogueModule
  ],
  exports: [PostFormComponent, MaterialDialogueModule],
  declarations: [PostFormComponent, DdmmyyDatePipe]
})
export class PostFormModule { }
