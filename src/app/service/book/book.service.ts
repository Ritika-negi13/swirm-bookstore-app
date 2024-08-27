import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl='get/book'
  constructor(private http:HttpService) { }

  getBooks=()=>{
    return this.http.getService(this.baseurl);
  }
}
