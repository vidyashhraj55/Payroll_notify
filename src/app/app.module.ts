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
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ServiceService } from './service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { AddFormComponent } from './add-form/add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    // DialogOverviewExampleDialog,
    SignInComponent,
    SignUpComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    AddFormComponent
  
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
    MatGridListModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  entryComponents: [AddFormComponent]
})
export class AppModule { }
