import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllExamplesComponent } from '../all-examples.component';

const routes: Routes = [
  {path: '', component: AllExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllExamplesRoutingModule { }
