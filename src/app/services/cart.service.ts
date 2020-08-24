import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  mockUrl = 'http://localhost:3000/';
  public products: any;
  public cartItems = [];

  // private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  // private itemsInCart: Product[] = [];
//  products: Product[];

  constructor(
    private http: HttpClient
  ) {

    this.products = [
      {
        id: 1,
        name: 'iPhone-x',
        price: 1500,
        category: 'Mobile',
        photo: './assets/shopping/1.png'
      },
      {
        id: 2,
        name: 'OPPO_AS',
        price: 200,
        category: 'Mobile',
        photo: './assets/shopping/2.jpg'
      },
      {
        id: 3,
        name: 'TITAN_Watch',
        price: 300,
        category: 'Watch',
        photo: './assets/shopping/14.png'
      },
      {
        id: 4,
        name: 'FastTrack_Digital',
        price: 500,
        category: 'Watch',
        photo: './assets/shopping/15.png'
      },
      {
        id: 5,
        name: "BOOS_HeadPhone",
        price: 750,
        category: 'Headphone',
        photo: './assets/shopping/16.jpg'
      },
      {
        id: 6,
        name: 'iPhone_HeadPhone',
        price: 900,
        "category": 'Headphone',
        photo: './assets/shopping/17.png'
      },
      {
        id: 7,
        name: 'Mi_HeadPhone',
        price: '100',
        category: 'Headphone',
        photo: './assets/shopping/18.png'
      }
    ];
    // this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }


add(product: any) {

  this.products.push(product);
}

remove(index: number) {

    if (index > -1) {
        this.products.splice(index, 1);
    }

}

addProductToCart(product) {
  this.cartItems.push(product);
}

removeProductFromCart(productId) {
  this.cartItems.map((item, index) => {
    if (item.id === productId) {
      this.cartItems.splice(index, 1);
    }
  });
}

emptryCart() {
  this.cartItems.length = 0;
}

getTotalPrice() {
  let total = 0;

  this.cartItems.map(item => {
    total += item.price;
  });

  return total
}


clear() {
this.products = [];
}

get() {
  return this.products;
}

addToCart(product) {
  this.products.push(product);
}


// tslint:disable-next-line: adjacent-overload-signatures
getItem(id: any): Observable<any> {
  return this.http.get(this.mockUrl + 'products/' + id);
}
getCart(id: any): Observable<any> {
  return this.http.get(this.mockUrl + 'products/' + id);
}

  public getCarts(): Observable<any> {
    return this.http.get(this.mockUrl + 'cartItems/');
  }
}
