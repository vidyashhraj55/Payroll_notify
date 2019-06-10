import { Component, OnInit, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { DateValidator } from '../date-validators';
import { AddFormComponent } from '../add-form/add-form.component';
import { DataSource } from '@angular/cdk/table';
import { ExcelService } from '../excel.service';
import { EmployeeForm } from '../employee-form';



let ELEMENT_DATA: PeriodicElement[];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public dataSource: any;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router, private service: ServiceService, private excelService: ExcelService) {

  }




  // @Output() public sidenavToggle = new EventEmitter();
  // dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
  ngOnInit() {
    this.loadData();
    this.service.reloadEmployeList$.subscribe((data) => {
      if (data == 'reload') {
        this.loadData();
      }
    })

  }

  loadData() {
    this.service.getEmployee().subscribe((res: any) => {
      ELEMENT_DATA = res as PeriodicElement[];
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(ELEMENT_DATA, 'employees');
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  searchclear() {
    this.searchKey = "";
    this.applyFilter();
  }
  addemployee() {
    const dailogconfig = new MatDialogConfig();
    dailogconfig.disableClose = true;
    dailogconfig.autoFocus = true;
    dailogconfig.width = "60%";
    this.service.setEmployerDetails();
    this.dialog.open(AddFormComponent, dailogconfig);
  }
  onEdit(row) {
    console.log(row);
    this.service.editRow(row.Employee_ID).subscribe((res: any) => {
      console.log(res);
      this.dialog.open(AddFormComponent);
      //AddFormComponent.prototype.addForm.patchValue(res as EmployeeForm);



    })


  }
  displayedColumns =
    ['Employee_ID', 'EmployeeName', 'DateofJoining', 'PayCycle', 'AnnualFixedCTC', 'MonthlyFixedCTC', 'TotalPerformanceBonus', 'PB_Installments',
      'PB_EachPayment', 'JoiningBonus', 'JB_Installments', 'JB_EachPayment', 'MedicalInsurance', 'TotalCTC', 'Action'];
}

export interface PeriodicElement {
  Employee_ID: Number;
  EmployeeName: String;
  DateofJoining: String;
  PayCycle: String;
  AnnualFixedCTC: Number;
  MonthlyFixedCTC: Number;
  TotalPerformanceBonus: Number;
  PB_Installments: Number;
  PB_EachPayment: Number;
  JoiningBonus: Number;
  JB_Installments: Number;
  JB_EachPayment: Number;
  MedicalInsurance: Number;
  TotalCTC: Number;
  Action: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   // {Employee_ID:2823,EmployeeName:'prem',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'febrary',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
//   // {Employee_ID:2826,EmployeeName:'regi',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'march',AnnualFixedCTC:1600000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:2,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
//   // {Employee_ID:2828,EmployeeName:'santhu',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'june',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
//   // {Employee_ID:2827,EmployeeName:'sushma',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'april',AnnualFixedCTC:2200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:2,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
//   // {Employee_ID:2829,EmployeeName:'roja',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'march',AnnualFixedCTC:5200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},
//   // {Employee_ID:2820,EmployeeName:'goutham',DateofJoining:'2019-04-30T18:30:00.000Z',PayCycle:'january',AnnualFixedCTC:1200000,MonthlyFixedCTC:100000,TotalPerformanceBonus:100000,PB_Installments:4,PB_EachPayment:25000,JoiningBonus:50000,JB_Installments:2,JB_EachPayment:25000,MedicalInsurance:23000,TotalCTC:132000,Action:'edit'},


// ];