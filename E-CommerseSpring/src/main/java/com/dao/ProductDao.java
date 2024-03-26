package com.dao;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.model.Product;
@Service
public class ProductDao {
	
	@Autowired
	private ProductRepository prodRepo;
	
	public List<Product> getAllProducts() {
		return prodRepo.findAll();
	}     
	
	public Optional<Product> getProductById(long id){
//	Product cust =new Product(1,"raghu","male","9876543210","raghu@ts.com","raghu123");
	   return prodRepo.findById((long) id);
//		return prodRepo.findById((id);	
	}
	
	 public List<Product> getProductsByCategory(String category) {
	        return prodRepo.findByProdCategory(category);
	    }
	

	
	public String registerProduct(String prodName, String prodCategory,String prodBrand, String prodDesc, double price,MultipartFile file) throws IOException {
        Product  prod = new Product();
        prod.setProdName(prodName);
        prod.setProdCategory(prodCategory);
        prod.setProdBrand(prodBrand);
        prod.setProdDesc(prodDesc);
        prod.setPrice(price);
        prod.setImagedata(file.getBytes());
        prodRepo.save(prod);
        return "product added successfully";
    }
	
	
	
	
	public Product updateProduct(Product product){
		return prodRepo.save(product);
	}
	public void deleteProductById(long id){
	 prodRepo.deleteById(id);
	 
	}
	
	
	public List<Product> getProductsByBrand(String brand) {
		return prodRepo.findByProdBrand(brand);
	}    
	

}
