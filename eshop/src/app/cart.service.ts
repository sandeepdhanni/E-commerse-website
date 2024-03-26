// cart.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // [x: string]: any;
  // private cartItems: any[] = [];
  // storedCart:any;
  constructor(private http: HttpClient) {
    // // Retrieve cart data from local storage during service initialization
    //  this.storedCart = this.http.get<any[]>('getCartItems');
    // if (this.storedCart) {
    //   this.cartItems = JSON.parse(this.storedCart);
    // }
  }

  // addToCart(product: any) {
  //   this.cartItems.push(product);
  //   this.saveCartData();
  // }

  addToCart(cartItem: any): Observable<void> {
    return this.http.post<void>('addCartItem', cartItem);
  }

  getCartItems() {
    return this.http.get<any[]>('getCartItems');
    
  }

  // clearCart() {
  //   this.cartItems = [];
  //   this.saveCartData();
  // }

  // private saveCartData() {
  //   // Store cart data in local storage
  //   localStorage.setItem('cart', JSON.stringify(this.cartItems));
  // }

  // updateCart(items: any[]) {
  //   this.cartItems = items;
  // }
}


