import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  isemployee:Boolean = false;
  isuploademployee: boolean = false;

  mode = new FormControl('over');
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches)
    );

    employeelist(){
      this.isemployee = !this.isemployee;
      this.isuploademployee = false;
    }

    uploademployees()
    {
      this.isuploademployee=!this.isuploademployee;
      this.isemployee = false;
    }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
