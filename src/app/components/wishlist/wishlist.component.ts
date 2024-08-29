import { Component,OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book/book.service';
import { WishlistService } from 'src/app/service/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems:any=[];
  wislistLength:number=0;
  constructor(private wishListService:WishlistService, private wishlistService:WishlistService){}
  ngOnInit(): void {
    this.wishListService.getWishlist('/get_wishlist_items').subscribe({
      next:(res:any)=>{
        this.wishlistItems=res.result.filter((i:any)=>{
          return i.product_id!=null;
        });
        this.wislistLength=this.wishlistItems.length;
        console.log(this.wishlistItems)
      },
      error:(err:any)=>console.log(err),
      complete:()=>{}
    })
  }

  deleteFromWishlist=(param:any)=>{
    this.wishlistService.deleteFromWishlist('/remove_wishlist_item',param).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.location.reload();
      },
      error:(err:any)=>console.log(err),
      complete(){}
    })
  }
  

}
