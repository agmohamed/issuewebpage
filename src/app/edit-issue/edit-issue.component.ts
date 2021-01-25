import { Component, OnInit,NgZone } from '@angular/core';
import { BugServiceService } from './../bug-service.service';
import { Router } from '@angular/router';

import { Bugs } from '../bugtrick';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {
  currentIssues: any=[];
  issueForm:FormGroup;
  constructor(private fb:FormBuilder,private ngZone:NgZone,private router :Router,
    public bugService:BugServiceService) 
  { 
    
  }

  ngOnInit() {
    this.updateIssue();
  }

    data={
      id:this.currentIssues.issue_id,
      name:this.currentIssues.issue_name,
      message:this.currentIssues.issue_message

    };
    updateIssue(){
      this.issueForm=new  FormGroup({
        issue_id:new FormControl(this.bugService.i_id),
        issue_name:new FormControl(this.bugService.i_name,Validators.required),
        
        issue_message:new FormControl(this.bugService.i_message,Validators.required)
     
      })
    }
    onUpdate(){
     this.bugService.updateBug(this.bugService.i_id,this.issueForm.value)
     .subscribe(
      data=>{
        console.log(this.issueForm.value);
        this.ngZone.run(()=>this.router.navigateByUrl('/issue-list'))
      }
    )
  }
}
