import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../date-validators';
import { ServiceService } from '../service/service.service';
import { MatDialogRef} from '@angular/material';
import swal from 'sweetalert';
import { months } from 'moment';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  showsave=false;
  showedit=false;
  addForm: FormGroup;
  employerDetails:any;

    constructor(
        private fb: FormBuilder,private service:ServiceService,private dialogRef:MatDialogRef<AddFormComponent>){}

            
    ngOnInit() {
      this.employerDetails = this.service.getEmployerDetails();
      this.addForm=this.fb.group({
        Employee_ID:[this.employerDetails.Employee_ID,[Validators.required,Validators.min(6),Validators.pattern('[0-9]*')]],
        EmployeeName:[this.employerDetails.EmployeeName,[Validators.required,Validators.pattern('[a-zA-z]*')]],
        DateOfJoining:[this.employerDetails.DateOfJoining],
        PayCycle:[this.employerDetails.PayCycle ,[Validators.required]],
        AnnualFixedCTC:[this.employerDetails.AnnualFixedCTC,[Validators.required,Validators.pattern('[0-9]*')]],
        MonthlyFixedCTC:[this.employerDetails.MonthlyFixedCTC,[Validators.required,Validators.pattern('[0-9]*')]],
        TotalPerformanceBonus:[this.employerDetails.TotalPerformanceBonus,[Validators.required,Validators.pattern('[0-9]*')]],
        PB_Installments:[this.employerDetails.PB_Installments,[Validators.required,Validators.pattern('[0-9]*')]],
        PB_EachPayment:[this.employerDetails.PB_EachPayment,[Validators.required,Validators.pattern('[0-9]*')]],
        JoiningBonus:   [this.employerDetails.JoiningBonus,[Validators.required,Validators.pattern('[0-9]*')]],
        JB_Installments: [this.employerDetails.JB_Installments,[Validators.required,Validators.pattern('[0-9]*')]],
        JB_EachPayment:  [this.employerDetails.JB_EachPayment,[Validators.required,Validators.pattern('[0-9]*')]],
        MedicalInsurance: [this.employerDetails.MedicalInsurance,[Validators.required,Validators.pattern('[0-9]*')]],
        TotalCTC:[this.employerDetails.TotalCTC,[Validators.required,Validators.pattern('[0-9]*')]]
      })
      
    }


    reset(){
      this.addForm.reset();  
    }
    saveEmployee(){
      console.log(this.addForm.value);
      this.service.addEmployee(this.addForm.value).subscribe((response: any) => {
        console.log(response);
        if (response) {
          console.log(response);
         
          this.service.success(':: Submitted successfully');
          this.dialogRef.close();
       
    }
    
  })
}
editEmployee(){
  // this.display1=true;
  // this.display=false;
  this.service.updateEmployee(this.addForm.value).subscribe((response: any) => {
    console.log(response);
    this.service.success('::updated Successfully');
    this.dialogRef.close();
})
}
  }