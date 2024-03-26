import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.css']
})
export class OrderAddressComponent {

  totalPrice:any;
  discount:any;
  total:any;
  regForm:FormGroup;
  address: any = {};

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private service:CustomerService,private toastr:ToastrService,private router:Router) { 
  
    this.regForm = this.formBuilder.group({
      custName: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      street: ['', [Validators.required, Validators.minLength(6)]],
      town: ['', [Validators.required, Validators.minLength(3)]],
      district: ['', [Validators.required, Validators.minLength(4)]],
      state: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.totalPrice = params['totalPrice'];
      this.discount=(this.totalPrice*10)/100;
      this.total=this.totalPrice-(this.discount+99);
      // this.customerId=localStorage.getItem('userId');
      // this.customerName=localStorage.getItem('userName');
      // this.customerEmail=localStorage.getItem('userEmail');
      // this.customerMobile=localStorage.getItem('userMobile');
      // this.cartid=212;
     
    });
  }


  submitRegForm(regForm: any){


   
    this.address.custName = regForm.custName;
      this.address.mobileNo = regForm.mobileNo;
      this.address.pincode = regForm.pincode;
      this.address.street = regForm.street;
      this.address.town =regForm.town;
      this.address.district = regForm.district;
      this.address.state = regForm.state;
     
      // localStorage.setItem('orderAddress',this.address);

      // localStorage.setItem('orderAddress', JSON.stringify(this.address));


      
      const addressJSON = JSON.stringify(this.address);
      
    this.service.setAddress(addressJSON);
    console.log(addressJSON);

    // this.toastr.success("address added sucessfully");
    //   this.service.setAddress(this.address);

// console.log(regForm);

      this.router.navigate(['payment/',this.totalPrice]);
     
    // } 


  }



  isFormValid(formData: any): boolean {
    // Check if name, email, mobile number, and password are provided and valid
    const nameValid = formData.custName && formData.custName.trim() !== '';
    const mobileValid = formData.mobileNo && /^[0-9]{10}$/.test(formData.mobileNo);
    const pincodeValid = formData.pincode && /^[0-9]{6}$/.test(formData.pincode);
    const streetValid = formData.street && formData.street.length >= 6;
    const townValid = formData.town && formData.town.length >= 3;
    const districtValid = formData.district && formData.district.length >= 4;
    const stateValid = formData.state && formData.state.length >= 2;



  
    // Check if all conditions are met
    return  nameValid  && mobileValid && streetValid  && pincodeValid  && townValid  && districtValid && stateValid;
  }

}
