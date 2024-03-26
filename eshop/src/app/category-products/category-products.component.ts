import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  brandProducts:any;

  category:any;
  
  customerId:any;
  products:any;
  productId:any;
  selectedProduct:any;
  totalPrice:any;
  totalItem:any;
  
    constructor(private route: ActivatedRoute,private service:CustomerService,private toastr:ToastrService,private router:Router){
      this.category=localStorage.getItem('category');
      // this.category='Men';


       // this.service.getAllProducts()
      this.service.getProductsByCategory(this.category)
      .subscribe((data: any) => {
        this.products = data;
        this.products.forEach((product: any) => {
          product.imageUrl = 'data:image/jpeg;base64,' + product.imagedata;
        });
       
      });
      
    }
    ngOnInit() {
      // this.route.params.subscribe(params => {
      //   this.brand = params['totalPrice'];
      // });
      // this.getBrandProducts();
    }
  
    // getBrandProducts() {
    //   this.service.getProductByBrand(this.brand)
    //     .subscribe((data: any) => {
    //       this.brandProducts = data;
    //       this.brandProducts.forEach((product: any) => {
    //         product.imageUrl = 'data:image/jpeg;base64,' + product.imagedata;
    //       });
         
    //     });
    // }
  
    addToCart(productId: any) {
  
      this.customerId=localStorage.getItem('userId');
      this.selectedProduct = this.products.find((product: any) => product.productId === productId);
      if (this.selectedProduct) {
        console.log('Required product:', this.selectedProduct);
      } else {
        console.log('Product not found.');
      }
  
      
        
   
        this.router.navigate(['product/',this.selectedProduct.productId]);
        // console.log(this.selectedProduct.productId);
  
  
    }
  

}
