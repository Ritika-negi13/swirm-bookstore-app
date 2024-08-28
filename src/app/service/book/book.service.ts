import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseurl='get/book';
  constructor(private http:HttpService) { }

  getBooks=()=>{
    return this.http.getService(this.baseurl,false,null);
  }
  access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdA';

  getOrderBooks(url : any) {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.getService(url, true, { headers: myHeaders });
  }


}
