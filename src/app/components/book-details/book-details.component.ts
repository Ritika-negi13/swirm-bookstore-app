import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdataService } from 'src/app/service/bookdata/bookdata.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';
import { WishlistService } from 'src/app/service/wishlist/wishlist.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  bookId!:any;
  book : any;
  feedbacks:any=[];
  stars=[false,false,false,false,false];
  comment:string='';
  constructor(private bookdata : BookdataService, private feedbackService:FeedbackService,
    private wishlistService:WishlistService, private router:Router, private cartService:CartService
  ){}

  ngOnInit(){
    this.bookdata.bookId.subscribe((id)=>{
      this.bookId=id;
      console.log(id);
    })
    this.bookdata.booksData.subscribe((book)=>{
      this.book=[];
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
  addReview=()=>{
    const rating=(this.stars.filter(star=>star).length).toString();
    const data={
      rating:rating,
      comment:this.comment
    }
    this.feedbackService.addFeedback('/add/feedback',data,this.bookId).subscribe({
      next:(res)=>{
        console.log(res);
        this.comment='';
        for(let  i of this.stars){
          i=false;
        }
      },
      error:(err)=>console.log(err),
      complete:()=>{}
    })
  }

  onStarClick=(index:number)=>{
    for(let i=0;i<this.stars.length;i++){
      this.stars[i]=i<=index;
    }
  }

  addToWishlist=()=>{
    this.wishlistService.addToWishlist('/add_wish_list',this.bookId).subscribe({
      next:(res:any)=>{
        console.log(res);
        if(res.message=='Product item is already in wish list'){
          console.log("product is already in list");
        }
        else this.router.navigate(['/wishlist']);
      },
      error:(err)=>console.log(err),
      complete:()=>{}
    })
  }

  addToCart=()=>{
    this.cartService.addToCart('/add_cart_item',this.bookId).subscribe({
      next:(res:any)=>{
        console.log(res);
        if(res.message=='Product item is already added, increase the item count'){
          console.log("Product item is already added, increase the item count");
        }
        else this.router.navigate(['/myorder'])
      },
      error:(err:any)=>console.log(err),
      complete:()=>{}
    })
  }

}
