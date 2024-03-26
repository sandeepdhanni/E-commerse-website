import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router =inject(Router)
let userLoggedIn = localStorage.getItem('isUserLoggedIn');
if(userLoggedIn == "false"){
  alert("u r not authonticated")
  router.navigate(['login'])
  return false;
}
  
  return true;
};
