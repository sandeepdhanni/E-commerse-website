import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit{


  products: any;
  product = {
    prodName: '',
    prodCategory:'',
    prodBrand: '',
    prodDesc: '',
    price: 0,
    file:''
  };
 


  constructor(private service:CustomerService,private router:Router) { }
 
    ngOnInit(): void {
    }
   

  submitForm() {
    const formData = new FormData();
    formData.append('prodName', this.product.prodName);
    formData.append('prodCategory', this.product.prodCategory);
    formData.append('prodBrand', this.product.prodBrand);
    formData.append('prodDesc', this.product.prodDesc);
    formData.append('price', this.product.price.toString());
    formData.append('file', this.product.file);

    this.service.registerProduct(formData).subscribe(
 
    (response:any) => {
      // Handle the response from your Spring Boot backend here
      console.log(response);
    },
    (error:any) => {
      // Handle any errors that occur during the HTTP request
      console.error(error);
    }
  );
  
  alert("product added successfully");
  this.router.navigate(['showProducts']);
}

onFileSelected(event: any) {
  const files = event.target.files;
  if (files.length > 0) {
    this.product.file = files[0];
  }
}



}








