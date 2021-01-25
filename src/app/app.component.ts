import { Component, OnInit } from '@angular/core';
import { BugServiceService } from './bug-service.service';
import{Bugs} from 'src/app/bugtrick';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Bug Trick';

  protected bugs:Observable<Bugs[]>;
  constructor(public bugService:BugServiceService){

  }

  ngOnInit(){
    this.bugService.getBugs().subscribe(data=>{
      this.bugs=data;
    
    })
  }
  

}