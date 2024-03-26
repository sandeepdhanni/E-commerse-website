import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  customerId: any;
  cartItems: any;
  totalPrice: any = 0;
  totalItem : number = 0;
  userId:any;
  selectedSize: any='m';
  // selectedQuantity: number;
   selectedProduct:any;
  quantityOptions: number[] = Array.from({ length: 1 }, (_, i) => i + 1);

  // Login Status

  isLoggedIn: boolean;

  // cart Empty status

  isEmpty:boolean;
cartId:any;
quantity:any=1;

  constructor(private router: Router, private service: CustomerService,private toastr:ToastrService) { 
    this.isLoggedIn = service.getLoginStatus();
    this.service.getLoginStatus();
    this.isEmpty = true;
   
  }


  ngOnInit(): void {
    this.getCustomerCart();
    this.selectedSize=localStorage.getItem('productSize');

    localStorage.setItem('quantity',this.quantity)
    console.log(this.selectedSize);
    
  }

  getCustomerCart() {
    this.customerId = localStorage.getItem('userId');
    this.service.getUserCart(this.customerId)
      .subscribe((data: any) => {
        this.cartItems = data;
        
        this.totalItem = data.length;
        
        // console.log(this.cartItems);
        localStorage.setItem('userCartItem',this.cartItems);
        this.service.setCartItems(this.cartItems);
        this.cartItems.forEach((product: any) => {
          product.imageUrl = 'data:image/jpeg;base64,' + product.product.imagedata;
        });
        this.calculateTotalPrice();
      });
      
  }



  calculateTotalPrice() {
    this.totalPrice = 0;
    this.cartItems.forEach((product: any) => {
      product.price = product.product.price;
      this.totalPrice += product.price;
    });
    // this.cartItems.product.forEach((item: {price: any; }) => {
    //   this.totalPrice += item.price;
    // });
    // this.cartItems.forEach((item: { price: any, quantity: any }) => {
    //   this.totalPrice += item.price * item.quantity;
    //   this.totalItem += item.quantity; // Increment totalItem by item quantity
    // })
  }

  deleteProductFromCart(productId: any) {
    this.service.deleteCustomerCartProduct(this.customerId, productId)
      .subscribe((response: any) => {
        if (response.success) {
          this.cartItems = this.cartItems.filter((item: { productId: any; }) => item.productId !== productId);
          this.calculateTotalPrice();
          this.getCustomerCart();
          
        } else {
          console.log('Failed to remove item from cart.');
        }
      });
  }

  deleteCartById(cartId:any){
    this.customerId=localStorage.getItem('userId');
    this.selectedProduct = this.cartItems.find((product: any) => product.cartId === cartId);
    console.log(this.selectedProduct);
    console.log(this.selectedProduct.cartId);
    this.service.deleteCartById(this.selectedProduct.cartId)
    .subscribe((response:any)=>{
      // console.log(response);
      this.calculateTotalPrice();
             
    },
    err=>{console.log(err);
    }
    );
    this.toastr.success("cart item deleted");
    this.getCustomerCart();

  }


  deleteSingleProductFromCart(productId: any) {
    this.service.deleteCustomerCartSingleProduct(this.customerId, productId)
      .subscribe((response:any)=>{
        // console.log(response);
        this.calculateTotalPrice();
               
      },
      err=>{console.log(err);
      }
      );
      this.toastr.success("cart item deleted");
      this.getCustomerCart();
  }



  deleteCart() {
    this.service.deleteCustomerCart(this.customerId)
      .subscribe((response: any) => {
        if (response.success) {
          this.cartItems = [];
          this.calculateTotalPrice();
         
        } else {
          console.log('Failed to clear cart.');
        }
      });
      this.getCustomerCart();
  }

  shopClick(){
    this.router.navigate(['showProducts']);
  }



  placeOrder(){

    
    this.router.navigate(['address/',this.totalPrice]);
  }


  login(){
    this.router.navigate(['login']);
  }


 



}
