import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';
  onSearch(){
    console.log('Search query:',this.searchQuery);
  }
  constructor(private router:Router){}
  openProfile(){
    this.router.navigate(['/dashboard/profile']);
  }
}
