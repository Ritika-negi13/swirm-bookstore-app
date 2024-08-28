import { Component } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent {
  cartValue = 1;
  isOrderSummaryVisible = false;
  isFormContainerVisible = false;

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
