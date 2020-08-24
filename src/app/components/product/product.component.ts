import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
// import _ from 'lodash';
import * as _ from 'lodash';
export default 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() productAdded = new EventEmitter()
  // productdata: any;
  products: any = [];
  // cartItems: any = [];
  filters: any;
  private singleProduct;
  private isAdded;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getData();
    this.isAdded = new Array(this.products.length);
    this.isAdded.fill(false, 0, this.products.length);
    console.log('this.isAdded -> ', this.isAdded, this.products);
  }


  getData(){
    this.products = this.cartService.get()
      console.log( this.products);
  }

  getSort(category: any) {
  console.log(category);
  this.products =  _.orderBy(this.products, [category], ['asc']);
  }
  
  getFilter(data: any) {
    console.log(data);
    this.products =  _.filter(this.products, ['name' , data]);
    console.log( this.products);
    }

  addToCart(event, productId) {
    
    // If Item is already added then display alert message
    if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });

    this.cartService.addProductToCart(this.singleProduct[0]);
  }
}
