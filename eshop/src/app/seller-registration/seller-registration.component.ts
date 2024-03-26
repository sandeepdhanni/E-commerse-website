
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {
    constructor(private service: UserService) {}

    ngOnInit(): void {}

    SellerRegistration(regForm: any) {
      // Check if the passwords match
      if (regForm.password !== regForm['retype-password']) {
        alert("Passwords do not match. Please re-enter them.");
        return; // Exit the function without making the API call
      }
      const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(regForm.password)) {
            alert("Password must contain at least one uppercase letter and one special character.");
            return; // Exit the function if the password is not valid
        }
      this.service.RegisterUser(regForm).subscribe(
        (data: any) => {
          // Registration successful
          console.log("Registration successful");
          alert("Registration successful");
        },
        (error: HttpErrorResponse) => {
          // Handle errors here, you can log them for debugging
          console.error("Error during registration:", error);
          alert("Registration failed. Please try again later.");
        }
      );
    }


    redirectToGmail() {
      const userEmailAddress = 'user@example.com'; // Replace with the user's email address
      const yourEmailAddress = 'eshop@gmail.com'; // Replace with your email address
    
      const subject = ''; // You mentioned you want the subject to be empty
    
      const mailtoLink = `mailto:${yourEmailAddress}?subject=${subject}&cc=${userEmailAddress}`;
      
      // Open the user's default email client with the mailto link
      window.location.href = mailtoLink;
    }
    


}



