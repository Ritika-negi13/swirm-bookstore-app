import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  access_token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4NjM0MzMsImV4cCI6MTcyNDk0OTgzM30.8OEpM6gSD6wEW-Ity_PDTBopXZ0TJQffsV8sScoXEYE';
  
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
