import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  books!: any[];
  booksData = new BehaviorSubject<any>([]);
  bookImg: any[] = ["../../../assets/Image 8.png", "../../../assets/Image 7.png", "../../../assets/Image 11.png", "../../../assets/Image 12.png", "../../../assets/Image 36.png", "../../../assets/Image 8.png"];

  constructor(private https: HttpService) { }

  getBook(): any {
    this.https.getBookdetails("/get/book").subscribe({
      next: (res: any) => {
        this.books = res.result;
        this.books = this.books.map((book: any) => ({
          ...book,
          imgPath: this.getBookImg()
        })
        )
        this.booksData.next(this.books);
        console.log(this.booksData);
      }
    })
  }
  getBookImg() {
    const randomIndex = Math.floor(Math.random() * this.bookImg.length);
    return this.bookImg[randomIndex];
  }

}
