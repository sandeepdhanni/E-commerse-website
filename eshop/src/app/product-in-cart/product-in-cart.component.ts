// product.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Import CartService
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css'],
})
export class ProductComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1.',
      price: 1500,
      image: 'assets/products-p/Screenshot 2023-09-17 at 3.14.00 PM.png',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2.',
      price: 1800,
      image: 'assets/products-p/Screenshot 2023-09-17 at 3.14.00 PM.png',
    },
    // Add more products as needed
  ];

  constructor(private cartService: CartService) {} // Inject CartService

  ngOnInit(): void {}

  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the selected product to the cart
  }
}