import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'get/book';
  constructor(private http: HttpService) {}
  access_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM4MTliMmEyN2Q1NTAwMGUzNjVlZjgiLCJpYXQiOjE3MjQ3NjM0NjksImV4cCI6MTcyNDg0OTg2OX0.rUSSCFtsvZXjPSWgMWW5HH1_gNnumRu6qhodU_TezdA';

  getOrderBooks(url : any) {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.getOrderBooks(url, true, { headers: myHeaders });
  }
}
