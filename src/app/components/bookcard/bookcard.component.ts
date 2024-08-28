import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent {

  constructor(private https: HttpService, private bookdata : BookdataService) { }
  books!: any[];
  bookImg: any[] = ["../../../assets/Image 8.png", "../../../assets/Image 7.png", "../../../assets/Image 11.png", "../../../assets/Image 12.png", "../../../assets/Image 36.png", "../../../assets/Image 8.png"];
  filterBookList:any[]=[];
  option: string = 'price';
  
  ngOnInit():void{
    this.bookdata.getBook();
    // this.books = this.bookdata.booksData;
    this.bookdata.booksData.subscribe((book)=>{
      console.log(book);
      this.books = book;
      this.filterBookList = this.books;
    })
  }
  filter(event:any){
    this.option=event;
    this.filterBookList = this.books;
    this.filterBookList.sort((a: any, b: any) => {
      return a[event] - b[event];
    });
 }

}
