import { Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-featured-products-category',
  templateUrl: './featured-products-category.component.html',
  styleUrls: ['./featured-products-category.component.css']
})
export class FeaturedProductsCategoryComponent {
  constructor(private router: Router) { }

  // // Define the function to redirect to the offer page
  // redirectToOfferPage() {
  //   // Navigate to the desired route for the offer page
  //   // Replace 'offer' with the actual route path for your offer page
  //   this.router.navigate(['/offer']);
  // }

  showProducts(){
    this.router.navigate(['showProducts']);
  }
}
