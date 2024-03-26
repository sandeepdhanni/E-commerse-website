import { Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-featured-brands',
  templateUrl: './featured-brands.component.html',
  styleUrls: ['./featured-brands.component.css']
})
export class FeaturedBrandsComponent {
  products:any;
  brand:any;
  constructor(private router: Router,private service:CustomerService) { }

brandHm(){
this.brand="H&M";
localStorage.setItem('brandName','H&M');
this.router.navigate(['brandProducts/',this.brand]);


  // this.service.getProductByBrand().subscribe((data : any)=>{
  //   this.products =data;
  //   this.products.forEach((product:any) => {
  //     product.imageUrl = 'data:image/jpeg;base64,' + product.imagedata; // Assuming it's a JPEG image

     
  //   });
    
  // })
}

brandZara(){
this.brand="Zara";
localStorage.setItem('brandName','Zara');

this.router.navigate(['brandProducts/',this.brand]);

}

brandRoadster(){
this.brand="Roadster";
localStorage.setItem('brandName','roadster');

this.router.navigate(['brandProducts/',this.brand]);

}


  redirectToOfferPage() {
    // Navigate to the desired route for the offer page
    // Replace 'offer' with the actual route path for your offer page
  }


}





