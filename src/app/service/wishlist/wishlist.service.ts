import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpService) { }

  getWishlist = (url: any) => {
    let auth_token: any = localStorage.getItem("acesstoken");
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", `${auth_token}`);
    return this.http.getService(url, true, { headers: myHeaders });
  }

  addToWishlist = (url: any, param:any) => {
    let auth_token: any = localStorage.getItem("acesstoken");
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", `${auth_token}`);
    return this.http.postService(url+`/${param}`,null,true,{headers:myHeaders});
  }

  deleteFromWishlist=(url:any,param:any)=>{
    let auth_token: any = localStorage.getItem("acesstoken");
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", `${auth_token}`);
    return this.http.deleteService(url+`/${param}`,true,{headers:myHeaders});
  }
}
