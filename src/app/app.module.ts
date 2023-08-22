import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogiinComponent } from './auth/logiin/logiin.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfounfComponent } from './shared/component/notfounf/notfounf.component';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { MaintenanceComponent } from './shared/component/maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    LogiinComponent,
    RegisterComponent,
    NotfounfComponent,
    NotfoundComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
