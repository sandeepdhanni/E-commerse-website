package com.model;

import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Cart {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int cartId;
	    
	    @ManyToOne
	    @JoinColumn(name = "productId")
	    private Product product;
	    
	    @ManyToOne
	    @JoinColumn(name = "customerId")
	    private Customer customer;

	    public Cart(){}
	    
		public Cart(int cartId, Product product, Customer customer) {
			super();
			this.cartId = cartId;
			this.product = product;
			this.customer = customer;
		}

		public int getCartId() {
			return cartId;
		}

		public void setCartId(int cartId) {
			this.cartId = cartId;
		}

		public Product getProduct() {
			return product;
		}

		public void setProduct(Product product) {
			this.product = product;
		}

		public Customer getCustomer() {
			return customer;
		}

		public void setCustomer(Customer customer) {
			this.customer = customer;
		}

		@Override
		public String toString() {
			return "CartItem [cartId=" + cartId + ", product=" + product + ", customer=" + customer + "]";
		}
	    

	    
}
	
