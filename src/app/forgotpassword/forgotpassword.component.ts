import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { resetComponentState } from '@angular/core/src/render3/instructions';
import swal from 'sweetalert';
import { delay } from 'q';
import { passValidator } from '../custom-validators';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  hide=true;
  show1:boolean=true;
  show2:boolean=false;
  forgotForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router:Router ,private service:ServiceService) { 

    
  }
  isValid(controlName) {
    return this.forgotForm.get(controlName).invalid && this.forgotForm.get(controlName).touched;
  }




  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')]],
      accesscode:['',[Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z0-9._]+$')]],
        password:['',[Validators.required, passValidator, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],        confirmpassword: ['', [Validators.required, passValidator]]
   
        });
  }
  
  reset(){
  this.forgotForm.controls.email.setValue("")
  this.forgotForm.controls.accesscode.setValue("")
  this.forgotForm.controls.password.setValue("")
  this.forgotForm.controls.confirmpassword.setValue("")
  this.forgotForm.controls['email'].enable();
  }

  sendmail(){
    var data=this.forgotForm.value;
    const data1 = { email: data.email + "@accionlabs.com" };
    console.log(data1);
    this.service.verfiyEmail(data1).subscribe((response: any) => {
      if (response) {
    swal("email is verified, accesscode is sent your mail", "success")
   setTimeout(()=>{this.show2=true;},2000)
   this.forgotForm.controls['email'].disable();
  }
})
  }
  save(){
    var data=this.forgotForm.value;
    const token={token:data.accesscode, password: data.password };
    this.service.resetpassword(token).subscribe((response: any) => {
      if (response) {
        console.log(token);
        swal(response.message)
    this.router.navigate(['sign-in']);
  }
})
  }

//   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//   // return  this.forgotForm.controls['password'].value ==  this.forgotForm.controls['confirmpassword'].value;
//   if (group.get('password').value === group.get('confirmpassword').value)
//   return null;
// else
//   return console.log({passwordMismatch: true});
// };
// }

// passValidator(control: AbstractControl) {
//   if (control && (control.value !== null || control.value !== undefined)) {
//     const confirmpassword = control.value;

//     const passControl = control.root.get('password');
//     if (passControl) {
//       const passValue = passControl.value;
//       if (passValue !== confirmpassword || passValue === '') {
//         return {
//           isError: true
//         };
//       }
//     }
//   }
// }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}