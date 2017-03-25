import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CoreModule} from "./core/core.module";
import {WelcomeModule} from "./welcome/welcome.module";

import {AppComponent} from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./auth/auth.module";

import {DashboardModule} from "./dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    CoreModule.forRoot(),
    AuthModule.forRoot(),
    WelcomeModule.forRoot(),
    DashboardModule.forRoot(),

    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
