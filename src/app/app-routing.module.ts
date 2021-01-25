import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssueListComponent } from './issue-list/issue-list.component';
import { AddListComponent } from './add-list/add-list.component';

import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'issue-list'},
  {path:'add-list',component:AddListComponent},
  
  {path:'issue-list',component:IssueListComponent},

  {path:'add-issue',component:AddIssueComponent},
  
  {path:'edit-issue/:id',component:EditIssueComponent},

];

@NgModule({
  declarations:[
    //declare components and NOT the modules or services
   
    
    ],
  imports: [RouterModule.forRoot(routes),
    //import modules and NOT the components or services
  ],
  exports: [RouterModule
   
  ]
})
export class AppRoutingModule { }
