import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private http:HttpService) { }
  isLoggedIn=false;
  showdialog = false;
  ngOnInit(){
    /*******************************************************************************/
    //please do not remove this code, this is for admin login
    this.http.adminlogin('/admin/login', {
      email: 'admin@test.com',
      password: 'test@123',
    }).subscribe({
      next: (res: any) => {
        console.log("token:",res);
        localStorage.setItem('admin_accesstoken', res.result.accessToken);
      },
      error: (error: any) => {
        console.log(error);
      }
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
    this.showdialog=false;
  }
  openorders() {
    this.router.navigate(['/myorder']);
    this.showdialog=false;
  }
  
  toggle() {
    this.showdialog = !this.showdialog;
  }
  openProfile = () => {
    this.router.navigate(['/profile']);
    this.showdialog = false;
  }

  logout=()=>{
    localStorage.removeItem("acesstoken");
    window.location.reload();
  }
}
