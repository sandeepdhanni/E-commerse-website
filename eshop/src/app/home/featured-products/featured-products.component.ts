import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {

  products:any;
    constructor(private service : CustomerService,private toastr:ToastrService,private router:Router){
      this.service.getAllProducts().subscribe((data : any)=>{
        this.products =data;
        this.products.forEach((product:any) => {
          product.imageUrl = 'data:image/jpeg;base64,' + product.imagedata; // Assuming it's a JPEG image
  
         
        });
        
      })
    }
  


}
