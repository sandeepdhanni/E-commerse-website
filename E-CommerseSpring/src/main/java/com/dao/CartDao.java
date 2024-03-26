package com.dao;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Cart;

import com.model.Customer;
import com.model.Product;

@Service
public class CartDao {
	
	@Autowired
	 private CartRepository cartRepository;
	 
	    public List<Cart> getAllCartItems() {
	        return cartRepository.findAll();
	    }

//	    public void addToCart(Cart cart) {
//	        cartRepository.save(cart);
//	    }
//	    
	    public void deleteCartById(int cartId) {
	        cartRepository.deleteById(cartId);
	    }
	    
	    public int deleteCustomerCart(int customerId) {
			return cartRepository.deleteCustomerCart(customerId);
		}
	    
	    
	    public List<Cart> getCustomerCart(int customerId) {
			return cartRepository.findCartBycustomerId(customerId);
		}
	    
	    public int addToCart(int customerId,long productId){
			return cartRepository. addToCart(customerId,productId);
		}

		public int deleteCustomerCartProduct(int customerId,long productId) {
			return cartRepository.deleteCustomerCartProduct(customerId,productId);
			
		}
		
		public int deleteCustomerCartSingleProduct(int customerId,long productId) {
			return cartRepository.deleteCustomerCartSingleProduct(customerId,productId);
			
		}
	    
	   
	    }
