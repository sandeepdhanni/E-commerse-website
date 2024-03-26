import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.css']
})
export class BrandProductsComponent {
  brandProducts:any;

brand:any;

customerId:any;
products:any;
productId:any;
selectedProduct:any;
totalPrice:any;
totalItem:any;

  constructor(private route: ActivatedRoute,private service:CustomerService,private toastr:ToastrService,private router:Router){
    this.brand=localStorage.getItem('brandName');
     // this.service.getAllProducts()
    this.service.getProductsByBrand(this.brand)
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


  addToCart(productId: any) {
  
    this.customerId=localStorage.getItem('userId');
    this.selectedProduct = this.products.find((product: any) => product.productId === productId);
    if (this.selectedProduct) {
      console.log('Required product:', this.selectedProduct);
    } else {
      console.log('Product not found.');
    }

     
      this.router.navigate(['product/',this.selectedProduct.productId]);
     

  }


  

}
