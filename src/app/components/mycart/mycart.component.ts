import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent {
  cartValue = 1;
  isOrderSummaryVisible = false;
  isFormContainerVisible = false;
  cartItems : any = [];

  constructor(private book:BookService){ }

  ngOnInit(){
    this.book.getCartBooks('/get_cart_items').subscribe({
      next: (data:any) => {
        console.log('cart:',data.result);
        this.cartItems = data.result;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  formFunction() {
    this.isFormContainerVisible = !this.isFormContainerVisible;
  }

  orderFunction() {
    this.isOrderSummaryVisible = !this.isOrderSummaryVisible;
  }
  incValue() {
    this.cartValue++;
  }
  decValue() {
    if (this.cartValue > 1) {
      this.cartValue--;
    }
  }
}
