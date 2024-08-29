import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MycartComponent } from './components/mycart/mycart.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PleaseloginComponent } from './components/pleaselogin/pleaselogin.component';
import { LoginsignupComponent } from './components/loginsignup/loginsignup.component'; 
import { MyorderComponent } from './components/myorder/myorder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WishlistComponent } from './components/wishlist/wishlist.component';

import { BookcardComponent } from './components/bookcard/bookcard.component';


import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { RouterModule } from '@angular/router';


import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    DashboardComponent,
    MycartComponent,
    NavbarComponent,
    PleaseloginComponent,
    LoginsignupComponent,
    MyorderComponent,
    WishlistComponent,
    BookcardComponent,
    OrderPlacedComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
