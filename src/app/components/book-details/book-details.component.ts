import { Component } from '@angular/core';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  bookId : any;
  book : any;
  constructor(private bookdata : BookdataService){}

  ngOnInit(){
    this.bookdata.bookId.subscribe((id)=>{
      
      this.bookId = id;
      console.log(this.bookId);
    })

    this.bookdata.booksData.subscribe((book)=>{
      this.book = book.filter((b:any)=>{
        if(b._id === this.bookId){
          return b;
        }
      })
      console.log(this.book);
    })
    
  }

}
