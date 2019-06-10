import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceService } from './service/service.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatListModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { AddFormComponent } from './add-form/add-form.component';
import { AuthInterceptor } from './auth.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FileSelectDirective } from 'ng2-file-upload';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatCardModule} from '@angular/material/card';
import { FileUploadModule } from "ng2-file-upload"; 


@NgModule({
  declarations: [
    AppComponent,
    // DialogOverviewExampleDialog,
    SignInComponent,
    SignUpComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    AddFormComponent,
    UploadEmployeeComponent,
    EmployeeListComponent,
    
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCheckboxModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatGridListModule,
    MatSnackBarModule,
    LayoutModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    FileUploadModule
    
    
  ],
  providers: [ServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent],
  entryComponents: [AddFormComponent]
})
export class AppModule { }
