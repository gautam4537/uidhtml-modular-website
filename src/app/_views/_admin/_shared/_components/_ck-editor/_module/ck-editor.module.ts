import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CkEditorComponent } from '../ck-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CkEditorComponent],
  declarations: [CkEditorComponent]
})
export class CkEditorModule { }
