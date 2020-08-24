import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems$: Observable<Product[]> = of([]);
  // public cartItems: Product[] = [];
  // totalamount: number;
  product: any;
  products
  cartData: any;
  private cartItems;
  private totalAmmount;
  private singleProduct;
  private isAdded;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.cartData = this.cartService.get();
  

    this.cartService.get().subscribe(data => {
      this.cartItems = data;
      this.totalAmmount = this.cartService.getTotalPrice();
    });

    }

// getcarts() {
//   this.cartService.products.subscribe(() => {
//     this.cartItems = this.cartService.products;
//   });
  
// }



removeItemFromCart(productId) {
  /* this.cartItems.map((item, index) => {
    if (item.id === productId) {
      this.cartItems.splice(index, 1);
    }
  });

  this.mySharedService.setProducts(this.cartItems); */

  this.cartService.removeProductFromCart(productId);

}

}
