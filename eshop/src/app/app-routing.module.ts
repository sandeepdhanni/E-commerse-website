import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { authGuard } from './auth.guard';
import { BrandProductsComponent } from './brand-products/brand-products.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { OrderAddressComponent } from './order-address/order-address.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { RegProductComponent } from './reg-product/reg-product.component';
import { sellerLoginComponent } from './sellerLogin/login.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Set HomeComponent as the default route
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'showProducts',component:ShowProductComponent},
  { path: 'cart',canActivate:[authGuard],component: CartComponent},
  { path: 'payment/:totalPrice', canActivate:[authGuard],component: PaymentComponent },
  { path: 'brandProducts/:brand',component:  BrandProductsComponent},
  { path: 'categoryProducts',component:CategoryProductsComponent},
  { path: 'address/:totalPrice',canActivate:[authGuard], component: OrderAddressComponent },
  { path: 'product/:selectedProduct.productId',component: ProductViewComponent },
  { path: 'orders',component:ShowOrdersComponent},
  { path: 'regProduct',component:RegProductComponent},
  { path : 'sellerLogin',component:sellerLoginComponent},
  { path : 'sellerRegister',component:SellerRegistrationComponent}




  // { path: 'payment',component: PaymentComponent}

  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
