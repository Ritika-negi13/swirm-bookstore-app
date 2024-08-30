import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';
import { BookService } from 'src/app/service/book/book.service';
import { HttpService } from 'src/app/service/http/http.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { cart } from '../../../assets/cart'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  
  isLoggedIn=false;
  showdialog = false;
  search='';
  cartNo = 0;
  constructor(
    private router: Router,
    private http: HttpService,
    private book: BookService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private bookdata:BookdataService
  ) {
    iconRegistry.addSvgIconLiteral(
      'cart',
      sanitizer.bypassSecurityTrustHtml(cart)
    );
  }
  ngOnInit(){
    /*******************************************************************************/
    //please do not remove this code, this is for admin login
    this.http
      .adminlogin('/admin/login', {
        email: 'admin@test.com',
        password: 'test@123',
      })
      .subscribe({
        next: (res: any) => {
          console.log('token:', res);
          localStorage.setItem('admin_accesstoken', res.result.accessToken);
        },
        error: (error: any) => {
          console.log(error);
        },
      });

    /*******************************************************************************/
    /*******************************************************************************/
    //please do not remove this code, this is for save user id
    this.book.getCartBooks('/get_cart_items').subscribe({
      next: (data: any) => {
        console.log('user', data.result[0].user_id._id);
        this.cartNo = data.result.length;
        localStorage.setItem('userId', data.result[0].user_id._id);
      },
      error: (error) => {
        console.log(error);
      },
    });
    /*******************************************************************************/
    console.log(localStorage.getItem('acesstoken'));
    if (localStorage.getItem('acesstoken')) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
    } else this.isLoggedIn = false;
  }
  openwishlist() {
    this.router.navigate(['/wishlist']);
    this.showdialog = false;
  }
  openorders() {
    this.router.navigate(['/myorder']);
    this.showdialog = false;
  }

  toggle() {
    this.showdialog = !this.showdialog;
  }
  openProfile = () => {
    this.router.navigate(['/profile']);
    this.showdialog = false;
  };

  logout = () => {
    localStorage.removeItem('acesstoken');
    window.location.reload();
  }
  onSearch(){
    this.bookdata.updateSearch(this.search); 
  }
  cart(){
    this.showdialog = false;
  }
};
