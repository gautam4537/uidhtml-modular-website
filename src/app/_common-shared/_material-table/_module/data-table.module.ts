import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../_material-module/material.module';
import { DataTableComponent } from '../data-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DataTableComponent],
  declarations: [DataTableComponent]
})
export class DataTableModule { }
