import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpService) { }
  
  getWishlist=(url:any)=>{
    let auth_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdhMDkzY2VhZTVjNDAwMGVkMGVkMDIiLCJpYXQiOjE3MjQ3Njc0MjEsImV4cCI6MTcyNDg1MzgyMX0.AvIOU9yTN2nKixTaVnJC4oHtGM-_oHlRhYVPU0rvh0A';
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", `${auth_token}`);
    return this.http.getService(url,true,{headers:myHeaders});
  }
}
