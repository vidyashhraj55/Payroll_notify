import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  displayedColumns =
      ['Employee_ID', 'EmployeeName', 'DateofJoining', 'PayrollCycle', 'AnnualFixedCTC', 'MonthlyFixedCTC', 'TotalPerformanceBonus', 'Performance_Installments',
    'Performance_EachPayment','JoiningBonus','Joining_Installments','Joining_EachPayment','MedicalInsurance','TotalCTC'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  Employee_ID:number;
  EmployeeName:string;
  DateofJoining:string;
  PayrollCycle:string;
  AnnualFixedCTC:number;
  MonthlyFixedCTC:number;
  TotalPerformanceBonus:number;
  Performance_Installments:number;
  Performance_EachPayment:number;
  JoiningBonus:number;
  Joining_Installments:number;
  Joining_EachPayment:number;
  MedicalInsurance:number;
  TotalCTC:number;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Employee_ID:2823,EmployeeName:'prem',DateofJoining:'21-feb-19',PayrollCycle:'febrary',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:4,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000},
 
];

