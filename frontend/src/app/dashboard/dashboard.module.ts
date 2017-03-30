import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {DashbaordRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TransferComponent} from './components/transfer/transfer.component';
import {LastTransactionsComponent} from './components/last-transactions/last-transactions.component';
import {AccountDetailComponent} from './components/account-detail/account-detail.component';
import {DashboardHomeComponent} from './components/dashboard-home/dashboard-home.component';
import {DashboardNavComponent} from './components/';
import {AccountService} from "./services";
import {AccountResourceService} from "./resources/account-resource-service";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { CurrencydisplayPipe } from './pipes/currencydisplay.pipe';

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
    DashboardComponent,
    DashboardNavComponent,
    TransferComponent,
    LastTransactionsComponent,
    AccountDetailComponent,
    DashboardHomeComponent,
    DateTransformPipe,
    CurrencydisplayPipe],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, DashbaordRoutingModule, AuthModule
  ],
  exports: [
    // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
    TransferComponent,
    LastTransactionsComponent
  ],
  providers: [
    // DI Providers (Services, Tokens, Factories...), may be instantiated multiple times
  ]
})
export class DashboardModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [
        AccountResourceService,
        AccountService
      ]
    };
  }
}
