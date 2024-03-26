import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent {

  customerId: any;
  orders: any;
  totalPrice: any = 0;
  totalItem : number = 0;
  userId:any;
  selectedSize: any='';
  products:any;
  productId:any;
  selectedProduct:any;
  // selectedQuantity: number;

  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  // Login Status

  isLoggedIn: boolean;



  constructor(private router: Router, private service: CustomerService,private toastr:ToastrService) { 
    this.isLoggedIn = service.getLoginStatus();
    this.service.getLoginStatus();

   
  }


  ngOnInit(): void {
    this.getCustomerOrders();
    this.selectedSize=localStorage.getItem('productSize');
    console.log(this.selectedSize);
    
  }

  getCustomerOrders() {
    this.customerId = localStorage.getItem('userId');
    this.service.getCustomerOrder(this.customerId)
      .subscribe((data: any) => {
        this.orders = data;
       
        this.orders.forEach((product: any) => {
          this.productId =  product.product.productId;
          
          console.log(this.productId);
          console.log(this.orders.productId);
          // this.service.getProductById(this.productId).subscribe((data : any)=>{
          //   this.products =data;
          //   console.log(this.products);
            this.orders.forEach((product:any) => {
              product.imageUrl = 'data:image/jpeg;base64,' + product.product.imagedata; // Assuming it's a JPEG image
      
             
            });
            
          // })


      
        });
       
      });

      console.log(this.orders);
  }


  cancelOrder(orderId:any){
    this.customerId=localStorage.getItem('userId');
    this.selectedProduct = this.orders.find((product: any) => product.orderId === orderId);
    console.log(this.selectedProduct);
    console.log(this.selectedProduct.cartId);
    this.service.deleteOrderById(this.selectedProduct.orderId)
    .subscribe((response:any)=>{
    
     
             
    },
    err=>{console.log(err);
    }
    );
    this.toastr.success("order cancelled");
    this.getCustomerOrders()
  }





  shopClick(){
    this.router.navigate(['product']);
  }



  placeOrder(){

    
    this.router.navigate(['address/',this.totalPrice]);
  }


  login(){
    this.router.navigate(['login']);
  }



}
