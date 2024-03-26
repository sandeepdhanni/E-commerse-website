import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

totalPrice:any;
discount:any;
total:any;
customerId:any;
cartid:any;
customerMobile:any;
customerEmail:any;
customerName:any;
selectedPaymentMode: any;
orderStatus:any;
productId:any;


  product:any;
addressData:any;
customer:any;
cartItems:any;
storedAddress:any;
  generatedCaptcha: number | undefined;
  userInput: number | undefined;
  captchaResult: string = '';
  isCaptchaCorrect: boolean | undefined;
  data:any;
  products:any=[];

constructor(private route: ActivatedRoute,private service:CustomerService,private toastr:ToastrService,private router:Router) { 
  
  this.isCaptchaCorrect = false;
 
  
}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.totalPrice = params['totalPrice'];
    
    this.discount=(this.totalPrice*10)/100;
    this.total=this.totalPrice-this.discount;

    this.customerId = localStorage.getItem('userId');

    this.service.getUserCart(this.customerId)
      .subscribe((data: any) => {
        this.cartItems = data;
        this.products = [];
        this.cartItems.forEach((product: any) => {
          this.products.push(product.product);
        });
       
      });
  
    this.productId=localStorage.getItem('productId')
    console.log(this.productId)
    this.addressData = this.service.getAddress();
    this.customer=this.service.getCustomer();

    
    this.service.getProductById(this.productId).subscribe((data : any)=>{
      this.product =data;
     
      
    })
   
  });
  this.generateCaptcha();

 
}




getProducts() {
  this.customerId = localStorage.getItem('userId');
  this.service.getUserCart(this.customerId)
    .subscribe((data: any) => {
      this.cartItems = data;
      this.cartItems.forEach((product: any) => {
        this.products = product.product;
      });
    
    });
    
}


generateCaptcha() {
  // Generate a random 4-digit numeric captcha
  const min = 1000; // Minimum 4-digit number (1000)
  const max = 9999; // Maximum 4-digit number (9999)
  this.generatedCaptcha = Math.floor(Math.random() * (max - min + 1)) + min;
}

checkCaptcha() {
  if (this.userInput === this.generatedCaptcha) {
    this.captchaResult = 'Captcha is correct!';
    this.isCaptchaCorrect = true;
  } else {
    this.captchaResult = 'Captcha is incorrect. Please try again.';
    this.isCaptchaCorrect = false;
    // Regenerate a new captcha
    this.generateCaptcha();
  }
  this.service.setCaptchaCorrect(this.isCaptchaCorrect);
  this.getProducts();
  console.log(this.products);

  
}

captchaBackgroundColor() {
  return this.isCaptchaCorrect ? 'green' : 'red';
}



saveOrder(): void {
  const orderData = {

    address:this.addressData,
    orderStatus: 'OrderPlaced',
    orderAmount: this.totalPrice,
    paymentType: this.selectedPaymentMode,
    customerId: localStorage.getItem('userId'), 
    product:this.products,
    productQuantity:localStorage.getItem('quantity'),
    productSize:localStorage.getItem('productSize')
  };
  console.log(orderData);

  this.service.registerOrder(orderData).subscribe(
    (response: any) => {
      console.log(response);
     this.toastr.success("order placed sucessfully")
      this.router.navigate(['showProducts']);
    },
    (error: any) => {
      console.error(error);
    }
  );
}

    

processPayment() {
  if (this.selectedPaymentMode === 'payOnline') { 
   
    this.payNow();
  
   
  } else if (this.selectedPaymentMode === 'cashOnDelivery') {
   
    this.orderPlaced(); 
   
  } else {
    console.log('Invalid payment mode'); 
  }
}

orderPlaced() {
 
  this.saveOrder()
  this.deleteCart()
}


payNow() {

  const RozarpayOptions = {
    description: 'Eshop pament demo',
    currency: 'INR',
    amount:this.total*100,
    name: 'EShop',
    // key: 'rzp_test_ykpIQCXJbWgyQi',

    key:'rzp_test_bnutCHykPliGDN',

    image: 'https://static.vecteezy.com/system/resources/previews/011/356/049/original/eshop-logo-good-shop-logo-free-vector.jpg',
    prefill: {
      name: this.customerName,
      email: this.customerEmail,
      phone: this.customerMobile,
    },
    theme: {
      color: '#ff3f6c'
    },
    modal: {
      ondismiss:  () => {
        console.log('dismissed')
      }
    }
  
    
  }

 

  const successCallback = (response: any) => {
    const paymentId = response.razorpay_payment_id;
    console.log('Payment ID:', paymentId);
    console.log(response);
   
   
    this.saveOrder();
   this.deleteCart();
   this.router.navigate(['home']);
  };

 

  const failureCallback = (error: any) => {
    console.log('Payment failed:', error);
  };



const rzp = new Razorpay(RozarpayOptions);
rzp.open();
rzp.on('payment.success', successCallback);
rzp.on('payment.error', failureCallback);



}



  deleteCart() {
    this.service.deleteCustomerCart(this.customerId)
      .subscribe((response: any) => {
        if (response.success) {
        console.log(response);
        } else {
          console.log('Failed to clear cart.');
        }
      });
  }

 
}