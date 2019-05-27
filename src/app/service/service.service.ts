import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { AuthInterceptor } from '../auth.interceptor';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
   
  baseUrl:String="http://localhost:4000/login";

  constructor(private http:HttpClient,private router:Router) { 
  }
  public login(data){
    return this.http.post("http://localhost:4000/login",data);
  }
  public register(data){
    
    return this.http.post("http://localhost:4000/register",data);
  }
  public verfiyEmail(data){
    return this.http.post("http://localhost:4000/forgot",data);
  }
  public resetpassword(data){
   
    return this.http.post("http://localhost:4000/reset",data);
  }
  public addEmployee(data){
   
    return this.http.post("http://localhost:4000/users/employee",data);
  }
  loggedIn() {
    return !!sessionStorage.getItem('token');
  }
  getToken(){
    return sessionStorage.getItem('token');
  }
}
