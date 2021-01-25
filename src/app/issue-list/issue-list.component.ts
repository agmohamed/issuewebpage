import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { BugServiceService } from './../bug-service.service';
import{Bugs} from 'src/app/bugtrick';

import {  Observable} from 'rxjs';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {


  issues:any=[];
  selectedIssue:Bugs;
  id;
  name;
 message;
  constructor(public bugService:BugServiceService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadList();
    //this.remove(this.route.snapshot.paramMap.get('id'));
    
  }
  loadList(){
    return this.bugService.getIssues().subscribe(data=>{
      this.issues=data;
      //this.id=this.issues.id;
      //this.name=this.issues.issue_name;
      //this.message=this.issues.issue_message;
    })
  }
  /*remove(id){
    this.bugService.deleteBug(id).subscribe(res=>{
      this.router.navigateByUrl('/issue-list');
    },error => {
      console.log(error);
    })
  }*/
  
  edit(issue:Bugs){
    this.selectedIssue=issue;
    this.id=this.selectedIssue.id;
    this.bugService.i_id=this.id;

    this.bugService.i_name=this.selectedIssue.issue_name;
    this.bugService.i_message=this.selectedIssue.issue_message;

    this.bugService.getIssue(this.id).subscribe(res=>{
      this.router.navigate(['/edit-issue/ +this.id']);
    })
  }

  remove(issue:Bugs){
    this.selectedIssue=issue;
    this.id=this.selectedIssue.id;
    this.bugService.i_id=this.id;
    this.bugService.deleteBug(this.id).subscribe(res=>{
      this.router.navigate(['/issue-list']);
    })
  }

}
