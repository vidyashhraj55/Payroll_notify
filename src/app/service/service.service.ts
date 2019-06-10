import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { AuthInterceptor } from '../auth.interceptor';
import { MatSnackBarConfig, MatSnackBar, mixinColor } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  baseUrl: String = "http://localhost:4000";
  empUrl: String = "http://localhost:4000/users";

  constructor(private http: HttpClient, private router: Router, public snackBar: MatSnackBar) {
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  }

  employerDetails: any;
  reloadEmployeList$ = new Subject<any>();
  success(msg: string) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }
  public login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  public register(data) {

    return this.http.post(`${this.baseUrl}/register`, data);
  }
  public verfiyEmail(data) {
    return this.http.post(`${this.baseUrl}/forgot`, data);
  }
  public resetpassword(data) {

    return this.http.post(`${this.baseUrl}/reset`, data);
  }
  public addEmployee(data) {

    return this.http.post(`${this.empUrl}/employee`, data)
      .pipe(tap((data) => {
        this.reloadEmployeList$.next('reload');
      }))
  }
  loggedIn() {
    return !!sessionStorage.getItem('token');
  }
  getToken() {
    return sessionStorage.getItem('token');
  }
  getEmployee() {
    return this.http.get(`${this.empUrl}/allEmployes`);
  }
  editRow(id) {
    console.log(id);
    return this.http.get(`${this.empUrl}/getById/${id}`)
      .pipe(
        map((data) => {
          this.employerDetails = data;
          return data;
        }))
  }

  getEmployerDetails() {
    return this.employerDetails;
  }

  setEmployerDetails() {
    this.employerDetails = {};
  }
  uploadFile(data){
    return this.http.post(`${this.empUrl}/upload`,data);
  }
  updateEmployee(data){
    console.log(data);
return this.http.post(`${this.empUrl}/update/${data.Employee_ID}`,data)
.pipe(tap((data) => {
  this.reloadEmployeList$.next('reload');
}));
  }



}
