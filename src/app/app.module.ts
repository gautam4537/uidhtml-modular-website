import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './_app-router-module/app-router.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UrlInterceptor } from './_common-shared/_interceptor/url-interceptor';
import { PageNotFoundModule } from './_views/_page-not-found/_module/page-not-found.module';
import { AdminModule } from './_views/_admin/_module/admin.module';
import { FrontendModule } from './_views/_frontend/_module/frontend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageNotFoundModule,
    AppRouterModule,
    AdminModule,
    FrontendModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
