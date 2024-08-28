import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
<<<<<<< HEAD
  baseurl='get/book';
  constructor(private http:HttpService) { }

  getBooks=()=>{
    return this.http.getService(this.baseurl,false,null);
  }
  access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ4NjM0MzMsImV4cCI6MTcyNDk0OTgzM30.8OEpM6gSD6wEW-Ity_PDTBopXZ0TJQffsV8sScoXEYE';

  getOrderBooks(url : any) {
=======
  /*******************************************************/
  //this part is for the admin login
  access_token = localStorage.getItem('admin_acesstoken');
  getOrderBooks(url: any) {
>>>>>>> f49956a2cbb2379453bad4d6f86f1f352aa0f688
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.getService(url, true, { headers: myHeaders });
  }
/*******************************************************/
  baseurl = 'get/book';
  constructor(private http: HttpService) {}

  getBooks = () => {
    return this.http.getService(this.baseurl, false, null);
  };
}
