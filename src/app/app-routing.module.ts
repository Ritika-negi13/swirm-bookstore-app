import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileComponent } from './components/profile/profile.component';

import { PleaseloginComponent } from './components/pleaselogin/pleaselogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';


const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {path : "", component : BookcardComponent},
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
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'myorder',
        component:MyorderComponent
      }
    ]
  }
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
