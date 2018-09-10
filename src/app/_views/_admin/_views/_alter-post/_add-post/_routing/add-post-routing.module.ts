import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../../../_common-shared/_auth/auth.guard';
import { AddPostComponent } from '../add-post.component';

const routes: Routes = [
  { path: '', component: AddPostComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPostRoutingModule { }
