import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  totalItem:any;
  customerId:any;
  customerName:any;
  customerMobile:any;
  loginOrLogout:any;
  searchTerm: string = '';
  isAdminLoggedIn:boolean;
  isLoggedIn:boolean;
  constructor(private service: CustomerService,private toastr:ToastrService,private router:Router){
    this.isLoggedIn = this.service.getLoginStatus();
    this.isAdminLoggedIn=this.service.getAdminLoginStatus();
    console.log(this.isLoggedIn)
    
    this.customerName=localStorage.getItem('userName');
    this.customerMobile=localStorage.getItem('userMobile');
    // let userstatus=localStorage.getItem("isUserLoggedIn");
    // if(userstatus=true)
   
  }


  
 
  ngOnInit(): void {
    this.customerId = localStorage.getItem('userId');
    if(this.isLoggedIn==true)
    this.service.getUserCart(this.customerId)
      .subscribe((data: any) => {    
        this.totalItem = data.length;
      });

      else{
        this.totalItem=0;
      }
    
  }

  LoginClick(){
    
    this.router.navigate(['login']);
  }

  // logout() {
  //   // Perform logout logic here
  //   // Set isLoggedIn to false after logout
  //   this.isLoggedIn = false;
  // }
  logout() {
    this.service.setUserLoggedOut();
    localStorage.setItem("isUserLoggedIn","false")
    this.isLoggedIn = false;
    localStorage.removeItem('key');
    localStorage.clear();
    this.router.navigate(['home']);

  }


  categoryMens(){
 localStorage.setItem('category','Men');
 this.router.navigate(['categoryProducts']);

  }

  
  categoryWomens(){
    localStorage.setItem('category','Women')
    this.router.navigate(['categoryProducts']);


  }

  categoryKids(){
    localStorage.setItem('category','Kids')
    this.router.navigate(['categoryProducts']);

  }


  onSearch(){
    if (this.searchTerm.toLowerCase() === 'kids') {
      this.categoryKids();

    } else if (this.searchTerm.toLowerCase() === 'women') {
      this.categoryWomens();
    }
    else if(this.searchTerm=='Men' || 'Mens' || 'Mens dress' || 'mens' || 'mens wear' || 'shirts' || 'tshirts'){
      this.categoryMens();
    }



  }
  


}
