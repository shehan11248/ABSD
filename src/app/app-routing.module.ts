import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {ManageItemComponent} from './view/manage-item/manage-item.component';
import {ManageOrderComponent} from './view/manage-order/manage-order.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: SidebarComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'items',
    component: ManageItemComponent
  },
  {
    path: 'orders',
    component: ManageOrderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
