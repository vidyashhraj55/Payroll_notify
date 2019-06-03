import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../date-validators';
import { ServiceService } from '../service/service.service';
import { MatDialogRef} from '@angular/material';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {


  addForm: FormGroup;

 

    constructor(
        private fb: FormBuilder,private service:ServiceService,private dialogRef:MatDialogRef<AddFormComponent>){}

            
    ngOnInit() {
      this.addForm=this.fb.group({
        Employee_ID:['',[Validators.required,Validators.min(6),Validators.pattern('[0-9]*')]],
        EmployeeName:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
        DateOfJoining:['',[DateValidator()]],
        PayCycle:['',[Validators.required]],
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
  }