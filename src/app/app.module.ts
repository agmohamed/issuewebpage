import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';

//components

import { BugServiceService } from './bug-service.service';
import { IssueListComponent } from './issue-list/issue-list.component';
import { AddListComponent } from './add-list/add-list.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    //declare components and NOT the modules or services
    AppComponent,
    AddIssueComponent,
    EditIssueComponent,
    
    IssueListComponent,
    AddListComponent,


    
  ],
  imports: [
    //import modules and NOT the components or services
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
   
  ],
  providers: [
    //provide services and NOT components or modules
    BugServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
