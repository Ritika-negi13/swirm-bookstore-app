import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  isLoggedIn=true;
  showdialog = false;
  openwishlist() {
    this.router.navigate(['/dashboard/wishlist']);
    this.showdialog=false;
  }
  openorders() {
    this.router.navigate(['/dashboard/myorder']);
    this.showdialog=false;
  }
  
  toggle() {
    this.showdialog = !this.showdialog;
  }
  openProfile = () => {
    this.router.navigate(['/dashboard/profile']);
    this.showdialog = false;
  }

  logout=()=>{

  }
}
