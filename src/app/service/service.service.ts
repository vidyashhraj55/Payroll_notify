import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   
  baseUrl:String="http://localhost:3000/users/login";

  constructor(private http:HttpClient,private router:Router) { 
  }
  public login(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
      
    };
    return this.http.post("http://localhost:4000/users/login",data,httpOption);
  }
  public register(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
      
    };
    return this.http.post("http://localhost:4000/users/register",data,httpOption);
  }
  public verfiyEmail(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
      
    };
    return this.http.post("http://localhost:4000/users/forgot",data,httpOption);
  }
  public resetpassword(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
      
    };
    return this.http.post("http://localhost:4000/users/reset",data,httpOption);
  }
}
