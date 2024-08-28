import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http:HttpClient) { }
  baseurl='https://bookstore.incubation.bridgelabz.com/bookstore_user';

  getService=(url:any,token:Boolean,headers:any)=>{
    return this.http.get(this.baseurl+url,token&&headers);
  }

  getBookdetails = (url:any)=>{
    return this.http.get(this.baseurl+url);
  }
}
