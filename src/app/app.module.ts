import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {ManageItemComponent} from './view/manage-item/manage-item.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
