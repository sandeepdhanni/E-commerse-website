import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import your header, featured products, and footer components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { FooterComponent } from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RegProductComponent } from './reg-product/reg-product.component';
import { ShowProductComponent } from './show-product/show-product.component'

// import { ProductComponent } from './product-in-cart/product-in-cart.component';
import { CartComponent } from './cart/cart.component';
// import { SocialAuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider } from "angularx-social-login";
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
// import { SocialLoginModule, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

import { SocialAuthServiceConfig, SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { LogoutComponent } from './logout/logout.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { FeaturedProductsCategoryComponent } from './featured-products-category/featured-products-category.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { OrderAddressComponent } from './order-address/order-address.component';
import { BrandProductsComponent } from './brand-products/brand-products.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { sellerLoginComponent } from './sellerLogin/login.component';
import { NavbarsellerComponent } from './reg-product/navbarseller/navbarseller.component';
import { FootersellerComponent } from './reg-product/footerseller/footerseller.component'; 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FeaturedProductsComponent,
    FooterComponent,
    RegProductComponent,
    ShowProductComponent,
    // ProductComponent,
    CartComponent,
    PaymentComponent,
    LogoutComponent,
    FeaturedBrandsComponent,
   //CartComponent,
    FeaturedProductsCategoryComponent,
    CaptchaComponent,
    SellerRegistrationComponent,
    OrderAddressComponent,
    BrandProductsComponent,
    CategoryProductsComponent,
    ProductViewComponent,
    ShowOrdersComponent,
    CarouselComponent,
    sellerLoginComponent,
    NavbarsellerComponent,
    FootersellerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      toastClass: 'ngx-toastr', 
      preventDuplicates: true,
    }),
    ToastrModule
  ],
 providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '53779538519-83ra1m7cu9gt67qpfb74jjiavodv5j9j.apps.googleusercontent.com'
            )
          }
        
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
