import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: any = [];

  private cartProductCount: number = 0;
  cartData: any;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    
    this.getcarts();

    this.cartService.get().subscribe(data => {
      this.cartProductCount = data.length;
    });
  }

  getcarts() {
    this.cartService.products.subscribe(() => {
      this.cartItems = this.cartService.products;
    });
  }
 
}
