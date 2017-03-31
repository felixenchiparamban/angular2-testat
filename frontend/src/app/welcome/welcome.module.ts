import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponent} from "./welcome.component";
import {AuthModule} from "../auth/auth.module";
import {WelcomeNavComponent} from "./components/welcome-nav/welcome-nav.component";


@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeNavComponent
  ],
  imports: [
    WelcomeRoutingModule, SharedModule, AuthModule
  ],
  exports: [],
  providers: [ ]
})
export class WelcomeModule {
  static forRoot(config?:{}) : ModuleWithProviders {
    return {
      ngModule: WelcomeModule,
      providers: [ ]
    };
  }
}
