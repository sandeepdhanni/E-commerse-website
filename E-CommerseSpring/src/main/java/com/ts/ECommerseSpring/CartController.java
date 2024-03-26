package com.ts.ECommerseSpring;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CartDao;
import com.model.Cart;
import com.model.Product;




@RestController
@CrossOrigin(origins="http://localhost:4200") 
public class CartController {
	
	 @Autowired
	    private CartDao cartDao;
	 
	 @GetMapping("getAllCartItems")
	    public List<Cart> getCartItems() {
	        return cartDao.getAllCartItems();
	    }

	 @GetMapping("/getCustomerCart/{customerId}")
		public List<Cart> getCustomerCart(@PathVariable int customerId){
			return cartDao.getCustomerCart(customerId);
		}
	 
	

//	    @PostMapping("addCartItem")
//	    public void addToCart(@RequestBody Cart cart) {
//	        cartDao.addToCart(cart);
//	    }
	    
	 
	 @DeleteMapping("/deleteCustomerCart/{customerId}")
		public String deleteCustomerCart(@PathVariable ("customerId")int customerId){
			cartDao.deleteCustomerCart(customerId);
			return "Cart with  CustomerId: "+customerId+ " Deleted Successfully!!!";
			}
		
		@PostMapping ("/addToCart/{customerId}/{productId}")
		public int addToCart(@PathVariable("customerId") int customerId,@PathVariable("productId") long productId){
			return cartDao.addToCart(customerId,productId);
			
		}
		
		@DeleteMapping("/deleteCustomerCartProduct/{customerId}/{productId}")
		public String deleteCustomerCartProduct(@PathVariable ("customerId")int customerId,@PathVariable("productId")long productId){
			cartDao.deleteCustomerCartProduct(customerId,productId);
			return "Cart with  CustomerId: "+customerId+ " and ProductId:"+productId+" Deleted Successfully!!!";
			}
		
		@DeleteMapping("/deleteCustomerCartSingleProduct/{customerId}/{productId}")
		public String deleteCustomerCartSingleProduct(@PathVariable ("customerId")int customerId,@PathVariable("productId")long productId){
			cartDao.deleteCustomerCartSingleProduct(customerId,productId);
			return "Cart with  CustomerId: "+customerId+ " and ProductId:"+productId+" Deleted Successfully!!!";
			}
		
		
		@DeleteMapping("deleteCartById/{id}")
		public void deleteEmployee(@PathVariable("id") int cartId) {
		   cartDao.deleteCartById(cartId);
		}
	
	 
	}
	
