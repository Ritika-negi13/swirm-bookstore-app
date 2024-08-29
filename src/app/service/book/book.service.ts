import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  /*******************************************************/
  //this part is for the admin login
  access_token = localStorage.getItem('admin_accesstoken');
  getOrderBooks(url: any) {
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