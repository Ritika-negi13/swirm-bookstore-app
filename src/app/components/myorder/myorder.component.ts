import { BookService } from './../../service/book/book.service';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent {
    orderBooks: any;

    constructor(private bookService:BookService) {}

    ngOnInit() {
<<<<<<< HEAD
        this.bookService.getOrderBooks('/get/book').subscribe( {
=======
        // this.bookService.getOrderBooks('/get/order').subscribe( {
        //     next: (res:any) => {
        //         this.orderBooks = res.result;
        //         console.log(this.orderBooks);
        //     },
        //     error: (error: any) => {
        //         console.log(error);
        //     }
        // });
        this.bookService.getOrderBooks('/admin/get/order').subscribe( {
>>>>>>> b347d65f2a4cc08d1202c29e5508fcc6bd0d3c10
            next: (res:any) => {
                this.orderBooks = res.result;
                console.log(this.orderBooks);
            },
            error: (error: any) => {
                console.log(error);
            }
        });
    }
}
