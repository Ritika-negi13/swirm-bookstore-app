import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  /*******************************************************/
  //this part is for the admin login
  admin_access_token = localStorage.getItem('admin_accesstoken');
  getOrderBooks(url: any) {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.admin_access_token}`);
    return this.http.getService(url, true, { headers: myHeaders });
  }
  /*******************************************************/
  baseurl = 'get/book';
  access_token = localStorage.getItem('acesstoken');
  constructor(private http: HttpService) {}

  getBooks = () => {
    return this.http.getService(this.baseurl, false, null);
  };

  getCartBooks = (url : any) => {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.getCartItems(url, true, { headers: myHeaders });
  };

  removeCartItem = (id : any) => {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.removeCartItem(id, '/remove_cart_item/', true, { headers: myHeaders });
  };

  editQuantity = (id : any, data : any) => {
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', `${this.access_token}`);
    return this.http.editQuantity(id, data, '/cart_item_quantity/', true, { headers: myHeaders });
  }
}
