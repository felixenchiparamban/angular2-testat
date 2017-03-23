import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {DashbaordRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LastTransactionsComponent } from './components/last-transactions/last-transactions.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';

@NgModule({
  declarations: [
    // Declarations (Components / Directives) used from/within the Module
  DashboardComponent,
    TransferComponent,
    LastTransactionsComponent,
    AccountDetailComponent],
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule, DashbaordRoutingModule
  ],
  exports: [
    // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
    DashboardComponent
  ],
  providers: [
    // DI Providers (Services, Tokens, Factories...), may be instantiated multiple times
  ]
})
export class DashboardModule {
  static forRoot(config?:{}) : ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }
}
