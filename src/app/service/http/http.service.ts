import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseurl = 'https://bookstore.incubation.bridgelabz.com/bookstore_user';
  // access_token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdA';
  //aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdAccess_token = localStorage.getItem('access_token');
  getOrderBooks(url: any, token: Boolean, headers: any) {
    return this.http.get(this.baseurl + url, token&&headers);

  }

  
  // login for admin
  adminlogin=(url:any,data:any)=>{
    return this.http.post(this.baseurl+url,data)
  }
  
  userlogin=(url:any,data:any)=>{
    return this.http.post(this.baseurl+url,data)
  }

  getService=(url:any,token:Boolean,headers:any)=>{
    return this.http.get(this.baseurl+url,token&&headers);
  }

  getBookdetails = (url:any)=>{
    return this.http.get(this.baseurl+url);
  }

  getCartItems = (url:any, token:Boolean, headers:any)=>{
    return this.http.get(this.baseurl+url, token&&headers);
  }

  removeCartItem = (id : any, url:any, token:Boolean, headers:any)=>{
    return this.http.delete(this.baseurl+url+id, token&&headers);
  }
  editQuantity = (id : any, data:any, url:any, token:Boolean, headers:any)=>{
    return this.http.put(this.baseurl+url+id, data, token&&headers);
  }
  postService=(url:any,data:any,token:boolean,headers:any)=>{
    return this.http.post(this.baseurl+url,data,token&&headers);
  }
  usersignup=(url:any,data:any)=>{
    return this.http.post(this.baseurl+url,data)
  }
  deleteService=(url:any,token:boolean,headers:any)=>{
    return this.http.delete(this.baseurl+url,token&&headers);
  }
}
