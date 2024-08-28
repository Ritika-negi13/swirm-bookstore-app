import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  isLoggedIn=false;
  showdialog = false;
  ngOnInit(){
    console.log(localStorage.getItem("acesstoken"))
    if(localStorage.getItem("acesstoken"))
    {
      this.isLoggedIn=true;
      console.log(this.isLoggedIn);
    }
    else
      this.isLoggedIn=false;
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
