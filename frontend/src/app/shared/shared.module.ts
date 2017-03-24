import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {WelcomeNavComponent} from './components/welcome-nav/welcome-nav.component';
import {DashboardNavComponent} from './components/';

@NgModule({
  declarations: [
    WelcomeNavComponent,
    DashboardNavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    WelcomeNavComponent,
    DashboardNavComponent
  ],
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
