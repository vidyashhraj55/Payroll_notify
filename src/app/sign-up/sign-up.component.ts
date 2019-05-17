import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import swal from 'sweetalert';
import {ServiceService} from '../service/service.service'
import { passValidator } from '../custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

hide= true;
registerForm: FormGroup;
 
constructor(private formBuilder: FormBuilder,private router:Router,private service:ServiceService) { 

  
}

isValid(controlName) {
  return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
}


ngOnInit() {
  this.registerForm = this.formBuilder.group({
    email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')]],
      password:['',[Validators.required, passValidator, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmpassword: ['', [Validators.required, passValidator]]
 
      });
}

reset(){
this.registerForm.controls.email.setValue("")
this.registerForm.controls.accesscode.setValue("")
this.registerForm.controls.password.setValue("")
this.registerForm.controls.confirmpassword.setValue("")
}
save(){
  var data = this.registerForm.value;
  const data1 = { email: data.email + "@accionlabs.com", password: data.password }
 console.log(data1);
  this.service.register(data1).subscribe((response: any) => {
    if (response) {
  this.router.navigate(['sign-in']);
}
  })
}
}
