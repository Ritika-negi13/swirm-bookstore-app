import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl='get/book';
  constructor(private http:HttpService) { }

  getBooks=()=>{
    return this.http.getService(this.baseurl,false,null);
  }

  
}
