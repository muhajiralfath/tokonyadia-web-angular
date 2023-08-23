import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {NotfoundComponent} from "./shared/component/notfound/notfound.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {path: "login" , component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "pages", loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)},
  {path: "**", component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
