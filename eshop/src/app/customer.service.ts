import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  adminLoginStatus:boolean;
  loginStatus: boolean;
  this:any;
  address: any = {}; 
  cartItems:any={};
  customer:any={};
  googleloginStatus: boolean
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();


  private captchaCorrectSource = new BehaviorSubject<boolean>(false);
  captchaCorrect$ = this.captchaCorrectSource.asObservable();

  setCaptchaCorrect(isCorrect: boolean) {
    this.captchaCorrectSource.next(isCorrect);
  }

  constructor(private http: HttpClient) {

    this.loginStatus = false;
    this.googleloginStatus = false;
    this.adminLoginStatus=false;

  }

  
  login() {
    
    this.isLoggedInSubject.next(true);
  }

  logout() {
  
    this.isLoggedInSubject.next(false);
  }


  getGoogleLoginStatus(): boolean {
    return this.googleloginStatus;
  }
  setGoogleLoginStatusIn() {
    this.googleloginStatus = true;
  }

  setGoogleLoginStatusOut(){
    this.googleloginStatus = false;
  }

  getEmails() {
    return this.http.get('getAllEmail');
  }

  setUserLoggedIn(): any {
    this.loginStatus = true ;
  }


  setUserLoggedOut(): any{
    this.loginStatus = false;
    } 

  setAdminLoggedIn(): any {
  this. this.adminLoginStatus = true ;
    }  
    
  setAdminLoggedOut(){
    this. this.adminLoginStatus = false;
  } 

  getAdminLoginStatus(): boolean{
    return this.adminLoginStatus;
   }

    getLoginStatus(): boolean{
     return this.loginStatus;
    }
  
    userLogin(loginForm: any): any {
      return this.http.get('login/' + loginForm.email + "/" + loginForm.password).toPromise();
      } 
    
      googleLogin(email:any):any{
        return this.http.get('getUser'+email);
      }


      
  setAddress(data: any) {
    this.address = data;
  }

  getAddress() {
    return this.address;
  }

  setCartItems(data: any){
    this.cartItems = data;
  }

  getCartItems(){
    return this.cartItems;
  }


  setCustomer(data: any) {
    this.customer= data;
  }

  getCustomer() {
    return this.customer;
  }
    


  


  getCustomers() {
    return this.http.get('getAllCustomers');
  }
  
  register(regForm: any) {
    return this.http.post('registerCustomer', regForm);
  }

  getCustomerById(Id:any) :Observable<any>{
    const url = `getCustomerById/${Id}`;
    return this.http.get<any[]>(url);

  }


  registerProduct(productForm: any) {
    return this.http.post('registerProduct', productForm);
  }

  getAllProducts(){
    // Replace with your actual endpoint
    return this.http.get<any[]>('getProducts');
  }


  getProductsByBrand(brand:any):Observable<any > {
    // Use a relative URL that matches the proxy configuration
    const url = `getPrductsByBrand/${brand}`;
    return this.http.get<any[]>(url);
    
  }

  getProductsByCategory(category:any):Observable<any > {
    // Use a relative URL that matches the proxy configuration
    const url = `getProductsByCategory/${category}`;
    return this.http.get<any[]>(url);
    
  }

  getProductById(productId:any):Observable<any>{
    const url = `getProductById/${productId}`;
    return this.http.get<any[]>(url);

  }


  addToCart(customerId: number, productId: number): Observable<number> {
    const url = `/addToCart/${customerId}/${productId}`;
    return this.http.post<number>(url, null); // Send a POST request with an empty body
  }


  getUserCart(customerId: number): Observable<any > {
    // Use a relative URL that matches the proxy configuration
    const url = `/getCustomerCart/${customerId}`;
    return this.http.get<any[]>(url);
  }


  deleteCustomerCartProduct(customerId: number, productId: number): Observable<any> {
    const url = `deleteCustomerCartProduct/${customerId}/${productId}`;
    return this.http.delete<any>(url);
  }


  deleteCustomerCartSingleProduct(customerId: any, productId: any): Observable<any> {
    const url = `/deleteCustomerCartSingleProduct/${customerId}/${productId}`;
    return this.http.delete<any>(url);
  }

  deleteCustomerCart(customerId: any):Observable<any> {
    const url = `/deleteCustomerCart/${customerId}`;
    return this.http.delete<any>(url);
  }

  
  deleteCartById(cartId: any):Observable<any> {
    const url = `/deleteCartById/${cartId}`;
    return this.http.delete<any>(url);
  }



  registerOrder(FormData: any) {
    return this.http.post('addOrders', FormData);
  }




  getAllOrders() {
    return this.http.get('getAllOrders');
  }

  getCustomerOrder(customerId: number): Observable<any > {
    // Use a relative URL that matches the proxy configuration
    const url = `/getCustomerOrder/${customerId}`;
    return this.http.get<any[]>(url);
  }

  deleteOrderById(customerId: number): Observable<any > {
      // Use a relative URL that matches the proxy configuration
      const url = `/deleteOrderById/${customerId}`;
      return this.http.delete<any[]>(url);
    }

  





  
}
