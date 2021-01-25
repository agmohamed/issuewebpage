import { Component, NgZone, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BugServiceService } from './../bug-service.service';
@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

  issueForm:FormGroup;
  constructor(private fb:FormBuilder,
    private ngZone:NgZone,
    private router :Router,
    public bugService:BugServiceService) { }

  ngOnInit() {
    this.addIssue();
  }
  addIssue(){
  this.issueForm=new  FormGroup({
    issue_name:new FormControl(null,Validators.required),
    issue_id:new FormControl(null,Validators.required),
    issue_message:new FormControl(null,Validators.required)
 
  })
}
  onSubmit(){
    this.bugService.createBug(this.issueForm.value)
    .subscribe(
      res=>{
        console.log(this.issueForm.value);
        this.ngZone.run(()=>this.router
        .navigateByUrl('/issue-list'))
      }
    );
    }

}
