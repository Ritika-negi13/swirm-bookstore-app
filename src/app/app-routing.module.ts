import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileComponent } from './components/profile/profile.component';


import { MycartComponent } from './components/mycart/mycart.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
