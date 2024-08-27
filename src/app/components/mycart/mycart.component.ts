import { Component } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent {
  isOrderSummaryVisible = false;
  isFormContainerVisible = false;

  formFunction() { 
    this.isFormContainerVisible = !this.isFormContainerVisible;
  }

  orderFunction() {
    this.isOrderSummaryVisible = !this.isOrderSummaryVisible;
  }
}
