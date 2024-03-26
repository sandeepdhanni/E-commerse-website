import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  productId:any;
  products: any;
  product:any;
  sizes: any[] = ['S', 'M', 'L', 'XL', 'XXL'];
  selectedSize: any;
  selectedProduct :any;
  customerId:any;
  totalItem:any;
  totalPrice:any;

  constructor(private route: ActivatedRoute,private service:CustomerService,private toastr:ToastrService,private router:Router){}
    // Initialize other product details here


    ngOnInit() {
      this.customerId = localStorage.getItem('userId');
      this.route.params.subscribe(params => {
        this.productId= params['selectedProduct.productId'];
      
        this.service.getProductById(this.productId).subscribe(
          (data) => {
            this.product = data;
            this.product.imageUrl = 'data:image/jpeg;base64,' + this.product.imagedata; // Assuming it's a JPEG image
            this.totalPrice=this.product.price;
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      
      });
    }


    selectSize(size: string) {
      // Assuming you have a property to store the selected size, for example, selectedSize
      this.selectedSize = size;
      localStorage.setItem('productSize',size);
      
    }

    addToCart() {
      if (this.selectedSize) {

        this.customerId = localStorage.getItem('userId');
        console.log(this.productId,this.customerId);
        this.service.addToCart(this.customerId,this.productId) .subscribe((response: number) => {
                 console.log(`Product added to cart. New cart size: ${response}`);
                 this.toastr.success("product added to cart");
              
  
               
                 this.service.getUserCart(this.customerId)
                   .subscribe((data: any) => {    
                     this.totalItem = data.length;
                     this.router.navigate(['cart']);
                   });
                 
               });
       
      } else {
        
     this.toastr.error("please select size");

      }
    }



    

  buyNow(){
    if (this.selectedSize) {
    this.router.navigate(['address/',this.totalPrice]);
    }else{
      this.toastr.error("please select size");
    }
  }




}
