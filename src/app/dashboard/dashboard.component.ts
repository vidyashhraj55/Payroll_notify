import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {PageEvent} from '@angular/material';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  @Output() public sidenavToggle = new EventEmitter();
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns =
      ['Employee_ID', 'EmployeeName', 'DateofJoining', 'PayrollCycle', 'AnnualFixedCTC', 'MonthlyFixedCTC', 'TotalPerformanceBonus', 'Performance_Installments',
    'Performance_EachPayment','JoiningBonus','Joining_Installments','Joining_EachPayment','MedicalInsurance','TotalCTC','Action'];
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
  Action:string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Employee_ID:2823,EmployeeName:'prem',DateofJoining:'21-feb-19',PayrollCycle:'febrary',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:4,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2826,EmployeeName:'regi',DateofJoining:'23-feb-19',PayrollCycle:'may',AnnualFixedCTC:1600000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:2,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2828,EmployeeName:'santhu',DateofJoining:'25-feb-19',PayrollCycle:'june',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:4,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2827,EmployeeName:'sushma',DateofJoining:'26-feb-19',PayrollCycle:'august',AnnualFixedCTC:2200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:2,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2829,EmployeeName:'roja',DateofJoining:'27-feb-19',PayrollCycle:'march',AnnualFixedCTC:5200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:4,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
  {Employee_ID:2820,EmployeeName:'goutham',DateofJoining:'22-feb-19',PayrollCycle:'january',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,Performance_Installments:4,Performance_EachPayment:25000,JoiningBonus:50000,Joining_Installments:2,Joining_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},

 
];

