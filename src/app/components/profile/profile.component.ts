import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isPDisabled=false;
  name='Ritika Negi';
  email='ritika@gmail.com';
  password='Ritika@123';
  phone='9811461310';
  addresses=[{
    address:'Go Digit, 4th floor ,Oasis Mall',
    city:'Bangalore',
    state:'Karnataka',
    type:'Work',
    isADisabled:false, 
  }]
  addnew(){
    this.addresses.push({
      address:'',
      city:'',
      state:'',
      type:'', 
      isADisabled:true,
    })
  }
  unableEditing(){
    this.isPDisabled=!this.isPDisabled;
  }
  unableAddress(e:any){
   if(e.address=='' && e.state=='' && e.city=='' && e.type=='') 
      this.addresses.pop();
   e.isADisabled=!e.isADisabled;
  }
  ngOnInit(){
  }
}
