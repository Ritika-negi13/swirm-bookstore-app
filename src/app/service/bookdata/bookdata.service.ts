import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  books!: any[];
  //in bookdata we have stored all of the books details
  booksData = new BehaviorSubject<any>([]);
  bookImg: any[] = ["../../../assets/Image 8@2x.png", "../../../assets/Image 7@2x.png", "../../../assets/Image 11@2x.png", "../../../assets/Image 12@2x.png", "../../../assets/Image 36@2x.png"];


  //for book-details getting book id
  bookId = new BehaviorSubject('');

  search= new BehaviorSubject('');
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

  //for book-details getting id 
  updateBookId(id :any){
    this.bookId.next(id);
    localStorage.setItem("bookId",id);
  }

  updateSearch(val:any){
    this.search.next(val);
  }
}
