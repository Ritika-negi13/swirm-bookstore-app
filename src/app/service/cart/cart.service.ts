import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpService) { }

  addToCart = (url:any,param:any) => {
    let auth_token: any = localStorage.getItem("acesstoken");
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", `${auth_token}`);
    return this.httpService.postService(url + `/${param}`, null, true, { headers: myHeaders });
  }
  
}
