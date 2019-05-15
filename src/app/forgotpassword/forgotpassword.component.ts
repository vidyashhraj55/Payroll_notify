import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { resetComponentState } from '@angular/core/src/render3/instructions';
import swal from 'sweetalert';
import { delay } from 'q';
import { passValidator } from '../custom-validators';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  show1:boolean=true;
  show2:boolean=false;
  forgotForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { 

    
  }
  isValid(controlName) {
    return this.forgotForm.get(controlName).invalid && this.forgotForm.get(controlName).touched;
  }




  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._]+$')]],
      accesscode:['',[Validators.required,Validators.minLength(8),Validators.pattern('[0-9]*')]],
        password:['',[Validators.required, passValidator, Validators.pattern('^[0-9]*[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]+$')]],
        confirmpassword: ['', [Validators.required, passValidator]]
   
        });
  }
  
  reset(){
  this.forgotForm.controls.email.setValue("")
  this.forgotForm.controls.accesscode.setValue("")
  this.forgotForm.controls.password.setValue("")
  this.forgotForm.controls.confirmpassword.setValue("")
  }

  sendmail(){
    swal("Link is sent your email ", " please check your email", "success")
   setTimeout(()=>{this.show2=true;},3000)
   this.forgotForm.controls['email'].disable();
  }
  save(){
    // console.log(this.forgotForm.controls.password.value,this.forgotForm.controls.confirmpassword.value);
    this.router.navigate(['sign-in']);
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