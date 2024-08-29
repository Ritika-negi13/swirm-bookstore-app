import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isPDisabled=false;
  isADisabled=false;
  unableEditing(){
    this.isPDisabled=!this.isPDisabled;
  }
  unableAddress(){
    this.isADisabled=!this.isADisabled;
  }
}
