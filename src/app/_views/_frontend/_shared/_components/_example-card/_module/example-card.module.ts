import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleCardComponent } from '../example-card.component';
import { MaterialModule } from '../../../../../../_material-module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ExampleCardComponent],
  declarations: [ExampleCardComponent]
})
export class ExampleCardModule { }
