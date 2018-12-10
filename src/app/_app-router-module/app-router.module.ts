import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../_views/_page-not-found/page-not-found.component';
import { AdminComponent } from '../_views/_admin/admin.component';
import { FrontendComponent } from '../_views/_frontend/frontend.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'login', loadChildren: '../_views/_login/_module/login.module#LoginModule' },
      { path: 'logout', loadChildren: '../_views/_logout/_module/logout.module#LogoutModule' },
      { path: 'dashboard', loadChildren: '../_views/_admin/_views/_dashboard/_module/dashboard.module#DashboardModule' },
      { path: 'add-post', loadChildren: '../_views/_admin/_views/_alter-post/_add-post/_module/add-post.module#AddPostModule' },
      { path: 'posts-list', loadChildren: '../_views/_admin/_views/_post-list/_module/post-list.module#PostListModule' },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'prefix' },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: '', component: FrontendComponent,
    children: [
      { path: 'all-examples', loadChildren: '../_views/_frontend/_views/_all-examples/_module/all-examples.module#AllExamplesModule' },
      { path: 'tutorials/:subject', loadChildren: '../_views/_frontend/_views/_tutorials/_module/tutorials.module#TutorialsModule'},
      { path: 'user', loadChildren: '../_views/_frontend/_views/_user/_module/user.module#UserModule' },
      { path: '', loadChildren: '../_views/_frontend/_views/_homepage/_module/homepage.module#HomepageModule' }
    ]
  },
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
