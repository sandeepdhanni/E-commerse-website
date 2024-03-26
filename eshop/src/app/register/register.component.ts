import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  message:any;
 
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CustomerService, private router: Router, private toastr: ToastrService) {
    this.regForm = this.formBuilder.group({
      custName: ['', Validators.required],
      gender: ['Male'], // Default value
      mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', Validators.required]
    });
  }
   
//   }
  
//   submitRegForm(regForm: any){
  
//     if (regForm.password == regForm.repassword) {
//     this.service.register(regForm).subscribe();
//     alert("successfully registered");
//     this.router.navigate(['login']);
//  } else {
//     alert("Enter your details correctly");
//   }

//   }

//   // submitRegForm(regForm: any) {
    
//   //   Object.keys(regForm.controls).forEach(key => {
//   //     regForm.controls[key].markAsTouched();
//   //   });
//   //   if (!this.isFormValid(regForm)) {
//   //     this.toastr.error('Please enter valid details');
//   //   } else {
//   //     this.service.register(regForm).subscribe();
//   //     this.toastr.success('Rigester sucessful');
//   //   }
//   // }


//   isFormValid(formData: any): boolean {
//     // Check if name, email, mobile number, and password are provided and valid
//     const nameValid = formData.custName && formData.custName.trim() !== '';
//     const emailValid = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
//     const mobileValid = formData.mobileNo && /^[0-9]{10}$/.test(formData.mobileNo);
//     const passwordValid = formData.password && formData.password.length >= 6;
  
//     // Check if all conditions are met
//     return nameValid && emailValid && mobileValid && passwordValid;
//   }


submitRegForm(regForm: any) {
    if (!regForm.valid) {
      this.toastr.error('Please fill out all fields correctly.');
      return;
  }

  if (regForm.password === regForm.repassword) {
    this.service.register(regForm).subscribe(() => {
      this.toastr.success('Registration Successful');
      this.router.navigate(['login']);
    }, () => {
      this.toastr.error('Registration Failed. Please try again later.');
    });
  } else {
    this.toastr.error('Passwords do not match. Please re-enter your password.');
  }
}

isFormValid(formData: any): boolean {
  // Check if name, email, mobile number, and password are provided and valid
  const nameValid = formData.custName && formData.custName.trim() !== '';
  const emailValid = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const mobileValid = formData.mobileNo && /^[0-9]{10}$/.test(formData.mobileNo);
  const passwordValid = formData.password && formData.password.length >= 6;

  // Check if all conditions are met
  return nameValid && emailValid && mobileValid && passwordValid;
}

  
}
