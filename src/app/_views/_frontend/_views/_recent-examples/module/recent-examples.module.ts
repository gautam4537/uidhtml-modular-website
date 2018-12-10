import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentExamplesComponent } from '../recent-examples.component';
import { ExampleCardModule } from '../../../_shared/_components/_example-card/_module/example-card.module';

@NgModule({
  imports: [
    CommonModule,
    ExampleCardModule
  ],
  exports: [RecentExamplesComponent],
  declarations: [RecentExamplesComponent]
})
export class RecentExamplesModule { }
