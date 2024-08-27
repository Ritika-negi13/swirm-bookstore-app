import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseurl = 'https://bookstore.incubation.bridgelabz.com/bookstore_user';
  access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdA';
  //aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdAccess_token = localStorage.getItem('access_token');
  getOrderBooks(url: any, token: Boolean, headers: any) {
    return this.http.get(this.baseurl + url, token&&headers);
  }
}
