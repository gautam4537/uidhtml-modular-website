import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './_app-router-module/app-router.module';
import { PageNotFoundModule } from './_views/_page-not-found/_module/page-not-found.module';
import { HomepageModule } from './_views/_frontend/_views/_homepage/_module/homepage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageNotFoundModule,
    AppRouterModule,
    HomepageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
