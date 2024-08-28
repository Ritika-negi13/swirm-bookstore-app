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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4NjM0MzMsImV4cCI6MTcyNDk0OTgzM30.8OEpM6gSD6wEW-Ity_PDTBopXZ0TJQffsV8sScoXEYE';

  getOrderBooks(url : any) {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.getService(url, true, { headers: myHeaders });
  }

  
}
