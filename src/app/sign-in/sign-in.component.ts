import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')]),
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
      })
  }
  
  navigatelogin(){
    swal({
      title: "login!!",
      text: "your successfully logged-in",
      icon: "success"
    });
  
    
}
navigateRegister(){

 this.router.navigate(['sign-up'])
  
}
navigateforgot(){
  this.router.navigate(['forgot']);
}
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
