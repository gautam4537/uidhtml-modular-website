import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../_views/_dashboard/dashboard.component';
import { LoginComponent } from '../../_login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/admin/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
