import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for displaying alerts
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { SocialAuthService } from 'angularx-social-login';

// import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password:any;
  user:any;
  // isLoggedIn:any;
LoggedInn:any;
 customer:any;

  customers : any;
  // public user: SocialUser = new SocialUser;
  constructor(private service:CustomerService,private router: Router, private snackBar: MatSnackBar,
  private toastr:ToastrService,public authService:SocialAuthService,  private http: HttpClient){
    this.service.getCustomers().subscribe((data : any)=>{
      this.customers =data;
    })
  }  

  ngOnInit() {
    this.authService.authState.subscribe(user => {
    this.user = user;
     this.LoggedInn=(user !=null);
    console.log(user);
  });
}

signInWithGoogle(){
  this.authService.authState.subscribe(user => {
    this.user = user;
     this.LoggedInn=(user !=null);
    console.log(user);
  });
}





  loginSubmit(loginForm: any) {
    if (!loginForm.email || !loginForm.password) {
      this.toastr.error('Please enter both email and password.');
      return;
    }
  
    const adminCredentials = { email: 'admin', password: 'admin' };
  
    if (loginForm.email === adminCredentials.email && loginForm.password === adminCredentials.password) {
      this.toastr.success('Admin Login Successful');
      localStorage.setItem("isAdminUserLoggedIn","true");
      this.service.setAdminLoggedIn();
      this.setLoggedInUserDetails(true);
      this.router.navigate(['home']);
      return;
    }
  
    const customer = this.customers.find(
      (customer: any) => customer.email === loginForm.email && customer.password === loginForm.password
    );
  
    if (customer) {
      this.toastr.success('Customer Login Successful');
      localStorage.setItem("isUserLoggedIn","true");
      this.service.setUserLoggedIn();
      this.setLoggedInUserDetails(false, customer);
      this.router.navigate(['home']);
    } else {
      this.toastr.error('Login Failed. Invalid credentials.');
    }
  }
  
  private setLoggedInUserDetails(isAdmin: boolean, customer?: any) {
    localStorage.setItem('isUserLoggedIn', 'true');

    if (isAdmin) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      this.service.setAdminLoggedIn();
      this.router.navigate(['home']);
    } else {
      // Set customer details in localStorage if needed
      localStorage.setItem('userId', customer.customerId);
      localStorage.setItem('userName', customer.custName);
      localStorage.setItem('userMobile', customer.mobileNo);
      localStorage.setItem('userEmail', customer.email);
      this.user=this.service.getCustomerById(customer.customerId);
      this.service.setCustomer(this.user);
     
    }
  }
  

  isLoggedIn(){
    return  this.service.getLoginStatus();
   }


   
 

  //   signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  //    signOut(): void {
  //   this.authService.signOut();
  // }

      // else {
      //   // Handle invalid credentials or show an error message
      //   this.snackBar.open('Invalid credentials. Please try again.', 'Close', {
      //     duration: 3000,
      //   });
      // }
    
      // onGoogleSignIn(){
      //   this.authService.signIn('google');
        
      // }


       // Function to handle login logic
  login() {
    // Simulate successful Google sign-in (replace this with your actual logic)
    const googleSignInSuccessful = true;

    // Simulate a check for valid email and password (replace this with your authentication logic)
    const emailAndPasswordValid = this.email === 'a' && this.password === 'a';

    if (googleSignInSuccessful || emailAndPasswordValid) {
      // Make a request to the server after successful login
      this.http.post('/api/login', { email: this.email }) // Assuming email is obtained from Google Sign-In
        .subscribe(response => {
          console.log('Login successful:', response);
          this.router.navigate(['/home']); // Redirect to home page after successful login
        }, error => {
          console.error('Login error:', error);
          this.snackBar.open('Login error. Please try again.', 'Close', {
            duration: 3000,
          });
        });
    } else {
      // Handle invalid credentials or show an error message
      this.snackBar.open('Invalid credentials. Please try again.', 'Close', {
        duration: 3000,
      });
    }
  }
    
    
  


}