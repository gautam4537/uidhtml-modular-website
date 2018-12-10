import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../../_common-shared/_auth/auth.guard';
import { PostListComponent } from '../post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListRoutingModule { }
