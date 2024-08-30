import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent {
  cartValue = 1;
  isOrderSummaryVisible = false;
  isFormContainerVisible = false;
  cartItems: any = [];
  isLogin = false;
  isEdit = true;
  location = 'Use current location';

  constructor(private book: BookService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('acesstoken')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

    this.book.getCartBooks('/get_cart_items').subscribe({
      next: (data: any) => {
        console.log('cart:', data.result);
        this.cartItems = data.result;
        //  console.log(this.cartItems[0].user_id.fullName);
        localStorage.setItem('user', this.cartItems[0].user_id);
        this.location = this.cartItems[0].user_id.address[0].fullAddress;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  formFunction() {
    if (localStorage.getItem('acesstoken')) {
      this.isFormContainerVisible = !this.isFormContainerVisible;
    } else {
      this.router.navigate(['/loginsignup']);
    }
  }

  orderFunction() {
    this.isOrderSummaryVisible = !this.isOrderSummaryVisible;
  }
  incValue(ind: any) {
    this.cartItems[ind].quantityToBuy++;
    this.book
      .editQuantity(this.cartItems[ind]._id, {
        quantityToBuy: this.cartItems[ind].quantityToBuy,
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  edit() {
    this.isEdit = !this.isEdit;
  }
  decValue(ind: any) {
    if (this.cartItems[ind].quantityToBuy > 1) {
      this.cartItems[ind].quantityToBuy--;
      this.book
        .editQuantity(this.cartItems[ind]._id, {
          quantityToBuy: this.cartItems[ind].quantityToBuy,
        })
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
  removeItem(ind: any) {
    this.book.removeCartItem(this.cartItems[ind]._id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cartItems.splice(ind, 1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
