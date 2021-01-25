import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BugServiceService } from './../bug-service.service';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  constructor(public budService:BugServiceService) { }

  @ViewChild('issueForm') uf:NgForm;
  ngOnInit() {
  }

  //onSubmit(myForm:NgForm){
    //console.log(myForm);
  //}
  onSubmit(){
    console.log(this.uf);
  }
}
