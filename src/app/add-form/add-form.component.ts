import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import swal from 'sweetalert';
import {ServiceService} from '../service/service.service'
import { DateValidator } from '../date-validators';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  addForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router:Router ,private service:ServiceService) { }

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      employeeID:['',[Validators.required,Validators.min(6),Validators.pattern('[0-9]*')]],
      employeeName:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
      dateofJoining:['',[DateValidator()]],
      payCycle:['',[Validators.required]],
      AnnualFixedCTC:['',[Validators.required,Validators.pattern('[0-9]*')]],
      MonthlyFixedCTC:['',[Validators.required,Validators.pattern('[0-9]*')]],
      TotalPerformanceBonus:['',[Validators.required,Validators.pattern('[0-9]*')]],
      PB_Installments:['',[Validators.required,Validators.pattern('[0-9]*')]],
      PB_EachPayment:['',[Validators.required,Validators.pattern('[0-9]*')]],
      JoiningBonus:['',[Validators.required,Validators.pattern('[0-9]*')]],
      JB_Installments:['',[Validators.required,Validators.pattern('[0-9]*')]],
      JB_EachPayment:['',[Validators.required,Validators.pattern('[0-9]*')]],
      MedicalInsurance:['',[Validators.required,Validators.pattern('[0-9]*')]],
      TotalCTC:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })

  }

}
