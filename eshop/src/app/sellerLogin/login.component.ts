import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for displaying alerts
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-Sellerlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class sellerLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private service : UserService // Inject MatSnackBar
  ) {}
    // if (this.email === 'a' && this.password === 'a') {
    //   // Navigate to the home page
    //   this.router.navigate(['/home']);
    // } else {
    //   // Handle invalid credentials or show an error message
    //   this.snackBar.open('Invalid credentials. Please try again.', 'Close', {
    //     duration: 3000,
    //   });
    login(regForm: any) {
  this.service.login(regForm).subscribe(
    (data: any) => {
      // Registration successful
      console.log("Login successful");
      alert("Login successful");
      // Redirect to the home pagess
      this.router.navigate(['/regProduct']);
    },
    (error: HttpErrorResponse) => {
      // Handle errors here, you can log them for debugging
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  );
}
}
