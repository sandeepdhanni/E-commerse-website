import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  customerId:any;
  products:any;
  productId:any;
  selectedProduct:any;
 totalPrice:any;
 totalItem:any;

  
 
  constructor(private service : CustomerService,private toastr:ToastrService,private router:Router){
    this.service.getAllProducts().subscribe((data : any)=>{
      this.products =data;
      this.products.forEach((product:any) => {
        product.imageUrl = 'data:image/jpeg;base64,' + product.imagedata; // Assuming it's a JPEG image

       
      });
      
    })
  }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('userId');
    this.service.getUserCart(this.customerId)
      .subscribe((data: any) => {    
        this.totalItem = data.length;
        // this.router.navigate(['home']);
      });
  }

  addToCart(productId: any) {
  
    this.customerId=localStorage.getItem('userId');
    this.selectedProduct = this.products.find((product: any) => product.productId === productId);
    if (this.selectedProduct) {
      console.log('Required product:', this.selectedProduct);
    } else {
      console.log('Product not found.');
    }

      // console.log(this.selectedProduct.productId,this.customerId);
      // this.service.addToCart(this.customerId,this.selectedProduct.productId) .subscribe((response: number) => {
      //          console.log(`Product added to cart. New cart size: ${response}`);
      //          this.toastr.success("product added to cart");
            

      //          this.customerId = localStorage.getItem('userId');
      //          this.service.getUserCart(this.customerId)
      //            .subscribe((data: any) => {    
      //              this.totalItem = data.length;
      //              this.router.navigate(['home']);
      //            });
               
      //        });
      
 
      this.router.navigate(['product/',this.selectedProduct.productId]);
      localStorage.setItem('productId',this.selectedProduct.productId);
      // console.log(this.selectedProduct.productId);


  }







  

}
