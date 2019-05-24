import {Component, OnInit, ViewChild, Output, EventEmitter,Inject} from '@angular/core';
import {PageEvent} from '@angular/material';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { DateValidator } from '../date-validators';
import { AddFormComponent } from '../add-form/add-form.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private router:Router ,private service:ServiceService) {

  }

 

  
  // @Output() public sidenavToggle = new EventEmitter();
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey:string;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
//


}
  

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  searchclear(){
    this.searchKey="";
    this.applyFilter();
  }
  addemployee(){
    const dailogconfig=new MatDialogConfig();
    dailogconfig.disableClose=true;
    dailogconfig.autoFocus=true;
    dailogconfig.width="60%";
    this.dialog.open(AddFormComponent,dailogconfig);
  }
  displayedColumns =
      ['Employee_ID', 'EmployeeName', 'DateofJoining', 'PayCycle', 'AnnualFixedCTC', 'MonthlyFixedCTC', 'TotalPerformanceBonus', 'PB_Installments',
    'PB_EachPayment','JoiningBonus','JB_Installments','JB_EachPayment','MedicalInsurance','TotalCTC','Action'];
}

export interface PeriodicElement {
  Employee_ID:number;
  EmployeeName:string;
  DateofJoining:string;
  PayCycle:string;
  AnnualFixedCTC:number;
  MonthlyFixedCTC:number;
  TotalPerformanceBonus:number;
  PB_Installments:number;
  PB_EachPayment:number;
  JoiningBonus:number;
  JB_Installments:number;
  JB_EachPayment:number;
  MedicalInsurance:number;
  TotalCTC:number; 
  Action:string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Employee_ID:2823,EmployeeName:'prem',DateofJoining:'21-feb-19',PayCycle:'febrary',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2826,EmployeeName:'regi',DateofJoining:'23-feb-19',PayCycle:'march',AnnualFixedCTC:1600000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:2,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2828,EmployeeName:'santhu',DateofJoining:'25-may-19',PayCycle:'june',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2827,EmployeeName:'sushma',DateofJoining:'26-march-19',PayCycle:'april',AnnualFixedCTC:2200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:2,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2829,EmployeeName:'roja',DateofJoining:'27-feb-19',PayCycle:'march',AnnualFixedCTC:5200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2820,EmployeeName:'goutham',DateofJoining:'29-dec-19',PayCycle:'january',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},

 
];




