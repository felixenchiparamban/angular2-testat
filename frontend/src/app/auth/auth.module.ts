import {NgModule, ModuleWithProviders} from '@angular/core';
import {RequestOptions} from "@angular/http";
import { RouterModule } from "@angular/router";

import {AuthService, SecurityTokenStore} from "./services";
import {AuthResourceService, AuthRequestOptions} from "./resources";

import {LoginComponent, LogoutComponent, RegisterComponent} from "./components";
import {SharedModule} from "../shared/shared.module";
import {EqualDirective} from './directive/equal.directive';
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    // TODO: Add declarations here, if additional components are placed within the Auth module
    LoginComponent, LogoutComponent, RegisterComponent, EqualDirective
  ],
  imports: [
    SharedModule, RouterModule
  ],
  exports: [
    // TODO: Add declarations here, if additional components are placed within the Auth module
    LoginComponent, LogoutComponent, RegisterComponent, EqualDirective
  ],
  providers: []
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {

    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiated only once

        // TODO: Add services/guards/... here, if additional classes are placed within the Auth module
        AuthResourceService,
        AuthService,
        AuthGuard,
        SecurityTokenStore,
        {
          provide: RequestOptions,
          useFactory: AuthRequestOptions.createFromTokenStore,
          deps: [SecurityTokenStore]
        }]
    };
  }
}
