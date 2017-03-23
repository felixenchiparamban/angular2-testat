import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { WelcomeNavComponent } from './components/welcome-nav/welcome-nav.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [
    // TODO: Add declarations here, if additional components are placed within the shared module
  WelcomeNavComponent,
    DashboardNavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, FormsModule
    // TODO: Add declarations here, if additional components are placed within the shared module
  ],
  providers: [ ]
})
export class SharedModule {
  // forRoot() isn't needed here...
}
