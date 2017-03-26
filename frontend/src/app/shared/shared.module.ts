import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
