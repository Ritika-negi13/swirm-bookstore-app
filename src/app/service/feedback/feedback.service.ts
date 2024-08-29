import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  access_token =localStorage.getItem("acesstoken");
  
  constructor(private http:HttpService) { }
  
  getFeedbacks=(url:any, param:any)=>{
    const headers=new Headers();
    headers.append('x-access-token',`${this.access_token}`);
    return this.http.getService(url+`/${param}`,true,{headers:headers});
  }
    
  addFeedback=(url:any,data:any,param:any)=>{
    const headers=new Headers();
    headers.append('x-access-token',`${this.access_token}`);
    return this.http.postService(url+`/${param}`,data,true,{headers:headers})
  }
}
