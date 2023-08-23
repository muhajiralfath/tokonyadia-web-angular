import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { MaintenanceComponent } from './shared/component/maintenance/maintenance.component';
import {LoginComponent} from "./auth/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotfoundComponent,
    MaintenanceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
