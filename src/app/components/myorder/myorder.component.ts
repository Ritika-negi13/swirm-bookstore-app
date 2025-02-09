import { BookService } from './../../service/book/book.service';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss'],
})
export class MyorderComponent {
  orderBooks: any;
  isLoading = true;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    // this.bookService.getOrderBooks('/get/order').subscribe( {
    //     next: (res:any) => {
    //         this.orderBooks = res.result;
    //         console.log(this.orderBooks);
    //     },
    //     error: (error: any) => {
    //         console.log(error);
    //     }
    // });
    this.bookService.getOrderBooks('/admin/get/order').subscribe({
      next: (res: any) => {
        this.orderBooks = res.result;
        this.isLoading = false;
        console.log(this.orderBooks);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
