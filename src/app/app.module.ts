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


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
<<<<<<< HEAD
import { WishlistComponent } from './components/wishlist/wishlist.component';
=======
import { PleaseloginComponent } from './components/pleaselogin/pleaselogin.component'; 

>>>>>>> bdbf59ffff7199ca1ca7a399cbcb9afb4e297c16

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    DashboardComponent,
    MycartComponent,
    NavbarComponent,
<<<<<<< HEAD
    WishlistComponent
=======
    PleaseloginComponent
>>>>>>> bdbf59ffff7199ca1ca7a399cbcb9afb4e297c16
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
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
