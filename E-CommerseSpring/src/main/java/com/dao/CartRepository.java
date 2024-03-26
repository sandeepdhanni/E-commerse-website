package com.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Cart;

import com.model.Product;

@Repository
public interface CartRepository extends JpaRepository <Cart,Integer> {
	 
	 @Query("SELECT c FROM Cart c WHERE c.customer.id = :customerId")
		List<Cart> findCartBycustomerId(@Param("customerId") int customerId);
	 

		@Query("SELECT c.product FROM Cart c WHERE c.customer.id = :customerId")
		List<Product> findProductsByCustomerId(@Param("customerId") int customerId);
		
		
		@Modifying
	    @Query("DELETE FROM Cart c WHERE c.customer.id = :customerId AND c.product.id = :productId ")
		@Transactional
	    int deleteCustomerCartProduct(@Param("customerId") int customerId, @Param("productId") long productId);
		
		@Modifying
	    @Query("DELETE FROM Cart c WHERE c.customer.id = :customerId")
		@Transactional
	    int deleteCustomerCart(@Param("customerId")int customerId);
	

		@Modifying
		@Query("DELETE FROM Cart c WHERE c.customer.id = :customerId AND c.product.id = :productId")
		@Transactional
		int deleteCustomerCartSingleProduct(@Param("customerId") int customerId, @Param("productId") long productId);

	

		@Modifying
		@Query("INSERT INTO Cart (product,customer) SELECT p, u FROM Product p, Customer u WHERE p.productId= :productId AND u.id= :customerId")
		@Transactional
		int addToCart(@Param("customerId") int customerId, @Param("productId") long productId);
		
}
