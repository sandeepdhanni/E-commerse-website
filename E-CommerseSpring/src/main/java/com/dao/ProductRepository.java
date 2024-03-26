package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
	 List<Product> findByProdBrand(String prodBrand);
	 
	 List<Product> findByProdCategory(String category);

}
