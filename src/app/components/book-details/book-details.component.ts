import { Component } from '@angular/core';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  bookId!:any;
  book : any;
  feedbacks:any=[];
  constructor(private bookdata : BookdataService, private feedbackService:FeedbackService){}

  ngOnInit(){
    this.bookId=localStorage.getItem("bookId");
    this.bookdata.booksData.subscribe((book)=>{
      this.book = book.filter((b:any)=>{
        if(b._id === this.bookId){
          return b;
        }
      })
      console.log(this.book);
    })

    this.feedbackService.getFeedbacks('/get/feedback',this.bookId).subscribe({
      next:(res:any)=>{
        this.feedbacks=res.result;
        console.log(this.feedbacks);
      }

    })
    
    
  }
  getNumbers(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  

}
