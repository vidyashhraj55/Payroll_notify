import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import swal from 'sweetalert';
import {ServiceService} from '../service/service.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router:Router ,private service:ServiceService) { }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')]),
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
      })
  }
  
  navigatelogin(){
    var data = this.loginForm.value;
    const data1 = { email: data.email + "@accionlabs.com", password: data.password }
   console.log(data1);
    this.service.login(data1).subscribe((response: any) => {
      console.log("response",response);
      console.log(response.message);
      if (response.success) {
        this.router.navigate(['dash']);
        swal("Good job!", "Succesfully Logged In", "success");
       
      }
      else{
        swal("Sorry!", "Incorrect login", "error");
      }
    
    }, (err) => {
      console.log(err);
      swal(err.error.message);})
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
