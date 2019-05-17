import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'sign-in' ,component: SignInComponent},
  {path:'sign-up' , component: SignUpComponent},
  {path:'forgot' , component:ForgotpasswordComponent },
  {path:'dash' , component:DashboardComponent },
  {path:'**',component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
