import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/services/auth-guard.service";

const appRoutes: Routes = [
  // TODO: Add routing of eagerly loaded modules here...
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  // TODO: Add routing of lazy loaded dashboard Module (with guards) here...
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
