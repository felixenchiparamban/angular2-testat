import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components';
import {DashboardHomeComponent} from "./components/dashboard-home/dashboard-home.component";

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, // TODO: Add initial router outlet dashboard component...
    children: [
      {path: '', component: DashboardHomeComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashbaordRoutingModule {}
