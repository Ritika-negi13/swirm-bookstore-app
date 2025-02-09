import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { BookService } from 'src/app/service/book/book.service';
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
  bookId!: any;
  book: any;
  feedbacks: any = [];
  bookImg!: any;
  mayrender: boolean = false;
  stars = [false, false, false, false, false];
  comment: string = '';
  constructor(private bookService: BookService, private bookdata: BookdataService, private feedbackService: FeedbackService,
    private wishlistService: WishlistService, private router: Router, private cartService: CartService, private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.bookImg = ["../../../assets/Image 8@2x.png", "../../../assets/Image 7@2x.png", "../../../assets/Image 11@2x.png", "../../../assets/Image 12@2x.png", "../../../assets/Image 36@2x.png"];
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
    this.bookService.getBooks().subscribe({
      next: (res: any) => {
        for (let i of res.result) {
          if (i._id === this.bookId) this.book = i;
        }
        this.book.bookImage = this.bookdata.getBookImg();
        console.log(this.book);
        this.mayrender = true;
      },
      error: (err) => console.log(err)
    })

    this.feedbackService.getFeedbacks('/get/feedback', this.bookId).subscribe({
      next: (res: any) => {
        this.feedbacks = res.result;
        console.log(this.feedbacks);
      }

    })


  }
  getNumbers(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  addReview = () => {
    const rating = (this.stars.filter(star => star).length).toString();
    const data = {
      rating: rating,
      comment: this.comment
    }
    this.feedbackService.addFeedback('/add/feedback', data, this.bookId).subscribe({
      next: (res) => {
        console.log(res);
        this.comment = '';
        for (let i of this.stars) {
          i = false;
        }
      },
      error: (err) => console.log(err),
      complete: () => { }
    })
  }

  onStarClick = (index: number) => {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i] = i <= index;
    }
  }

  addToWishlist = () => {
    if (localStorage.getItem("acesstoken")) {

      this.wishlistService.addToWishlist('/add_wish_list', this.bookId).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.message == 'Product item is already in wish list') {
            this.snackBar.open("Product item is already in wish list",'close',{
              duration:2000
            })
          }
          else {
            this.snackBar.open("added to wishlist",'close',{
              duration:2000
            });
            this.router.navigate(['/wishlist']);
          }
            
        },
        error: (err) => console.log(err),
        complete: () => { }
      })
    }
    else {
      this.router.navigate(['/pleaselogin']);
    }
  }

  addToCart = () => {
    if (localStorage.getItem("acesstoken")) {
      this.cartService.addToCart('/add_cart_item', this.bookId).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.message == 'Product item is already added, increase the item count') {
            this.snackBar.open("Product item is already added, increase the item count",'close',{
              duration:2000
            });
          }
          else {
            this.snackBar.open("added to cart",'close',{
              duration:2000
            })
          }this.router.navigate(['/cart'])
        },
        error: (err: any) => console.log(err),
        complete: () => { }
      })
    }
    else {
      this.router.navigate(['/pleaselogin']);
    }
  }



}
