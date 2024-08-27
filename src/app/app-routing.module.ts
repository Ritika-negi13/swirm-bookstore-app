import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileComponent } from './components/profile/profile.component';

import { MycartComponent } from './components/mycart/mycart.component';
import { PleaseloginComponent } from './components/pleaselogin/pleaselogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path: 'bookDetails',
        component: BookDetailsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'mycart',
        component: MycartComponent,
      },
      {
        path:'pleaselogin',
        component:PleaseloginComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
