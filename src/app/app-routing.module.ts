import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {path:'' , component:DashboardComponent },
  {path:'sign-in' ,component: SignInComponent},
  {path:'addform' ,component: AddFormComponent},
  {path:'sign-up' , component: SignUpComponent},
  {path:'forgot' , component:ForgotpasswordComponent },
  {path:'**',component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
