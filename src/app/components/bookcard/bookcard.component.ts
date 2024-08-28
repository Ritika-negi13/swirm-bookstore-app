import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent {

  constructor(private https: HttpService) { }
  books!: any[];
  bookImg: any[] = ["../../../assets/Image 8.png", "../../../assets/Image 7.png", "../../../assets/Image 11.png", "../../../assets/Image 12.png", "../../../assets/Image 36.png", "../../../assets/Image 8.png"];
  filterBookList:any[]=[];
  option: string = 'price';
  ngOnInit(): void {
    this.https.getBookdetails("/get/book").subscribe({
      next: (res: any) => {
        this.books = res.result;
        
        
        this.books = this.books.map((book: any) => ({
          ...book,
          imgPath: this.getBookImg()
        })
        )
        this.filterBookList=this.books;
        //console.log(this.books);
      }
    })
  }
  getBookImg() {
    const randomIndex = Math.floor(Math.random() * this.bookImg.length);
    return this.bookImg[randomIndex];
  }
  filter(event:any){
    this.option=event;
    this.filterBookList = this.books;
    this.filterBookList.sort((a: any, b: any) => {
      return a[event] - b[event];
    });
 }

}
