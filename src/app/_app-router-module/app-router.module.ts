import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../_views/_page-not-found/page-not-found.component';
import { HomepageComponent } from '../_views/_frontend/_views/_homepage/homepage.component';

const routes: Routes = [
  { path: 'admin', loadChildren: './../_views/_admin/_module/admin.module#AdminModule'},
  { path: 'user', loadChildren: './../_views/_frontend/_views/_user/_module/user.module#UserModule' },
  { path: '', component: HomepageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
