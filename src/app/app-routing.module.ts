import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { AddFormComponent } from './add-form/add-form.component';
import { AuthGuard } from './authguard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:'' , component:SignInComponent },
  {path:'sign-in' ,component: SignInComponent},
  {path:'dash' ,component: DashboardComponent},
  {path:'sign-up' , component: SignUpComponent},
  {path:'forgot' , component:ForgotpasswordComponent },
  {path:'table' , component:TableComponent },
  {path:'**',component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
