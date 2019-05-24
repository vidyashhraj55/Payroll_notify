import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../date-validators';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  addForm: FormGroup;
  
 

    constructor(
        private fb: FormBuilder){}

            
    ngOnInit() {
      this.addForm=this.fb.group({
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