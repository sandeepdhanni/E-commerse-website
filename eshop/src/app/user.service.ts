import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService 
  {
    constructor(private httpClient:HttpClient) { }
    RegisterUser(regFrom:any){
      return this.httpClient.post('RegisterUser',regFrom);
     }
     login(regForm:any) {
      return this.httpClient.post('login',regForm);
     }
  }