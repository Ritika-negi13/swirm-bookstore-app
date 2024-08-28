import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent {

  constructor(private https: HttpService, private bookdata: BookdataService) { }
  books!: any[];
  bookId: any;
  bookImg: any[] = ["../../../assets/Image 8.png", "../../../assets/Image 7.png", "../../../assets/Image 11.png", "../../../assets/Image 12.png", "../../../assets/Image 36.png", "../../../assets/Image 8.png"];
  filterBookList: any[] = [];
  option: string = 'price';

  //pagination
  currentPageno: number = 1;
  itemsPerPage: number = 12;
  totalPage: any;

  ngOnInit(): void {
    this.bookdata.getBook();
    // this.books = this.bookdata.booksData;
    this.bookdata.booksData.subscribe((book) => {
      console.log(book);
      this.books = book;
      this.filterBookList = this.books;
      this.updatePagination();
    })
  }
  filter(event: any) {
    this.option = event;
    this.filterBookList = this.books;
    this.filterBookList.sort((a: any, b: any) => {
      return a[event] - b[event];
    });
    this.updatePagination();
  }
  getId(e: any) {
    console.log(e);
    this.bookdata.updateBookId(e);
  }

  //pagination
  get paginationBook() {
    const startIndex = (this.currentPageno - 1) * this.itemsPerPage;
    return this.filterBookList.slice(startIndex, startIndex + this.itemsPerPage);
  }

  updatePagination() {
    this.totalPage = Math.ceil(this.filterBookList.length / this.itemsPerPage);
    this.currentPageno = 1;
  }

  //move to next page
  nextPage() {
    if (this.currentPageno < this.totalPage) {
      this.currentPageno++;
    }
  }
  //move to previous page
  previousPage() {
    if (this.currentPageno > 1) {
      this.currentPageno--;
    }
  }

}
