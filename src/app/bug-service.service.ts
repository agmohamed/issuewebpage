import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {map} from 'rxjs/Operators';
import{Bugs} from 'src/app/bugtrick';



@Injectable({
  providedIn: 'root'
})
export class BugServiceService {
  public i_id;
  public i_name;
  public i_message;
  
  protected url='http://localhost:3400';
  protected url1='http://localhost:3400/bugtracks';
  constructor(public httpClient:HttpClient) { }

    httpOptions={
      header:new HttpHeaders({
        'content-type':'application/json'
      }),
    };
    getBugs():Observable<any>{
      return this.httpClient.get(`${this.url}/bugtracks`)
      .pipe(map(res=>res));
    }
    //get
    getIssue(id):Observable<Bugs>{
      return this.httpClient.get<Bugs>(this.url+'/bugtracks/'+id,{
        headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8 '),
      })
      .pipe(map(res=>res));
    }
    getIssues():Observable<Bugs>{
      return this.httpClient.get<Bugs>(this.url+'/bugtracks/')
      .pipe(map(res=>res));
    }
    //Post
    createBug(data):Observable<Bugs>{
      return this.httpClient.post<Bugs>(this.url+'/bugtracks/',JSON.stringify(data),{
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),
      })
      .pipe(map(res=>res));
    
    }
    //put
    updateBug(id,data):Observable<Bugs>{
      return this.httpClient.put<Bugs>(this.url+'/bugtracks/'+id,JSON.stringify(data),{
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8 '),
      })
      .pipe(map(res=>res));  
    }
    //delete
    deleteBug(id):Observable<Bugs>{
      return this.httpClient.delete<Bugs>(`${this.url1}/${id}`,{headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8 '),})      
      .pipe(map(res=>res)); 
    }
}
