package com.ts.ECommerseSpring;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dao.ProductDao;
import com.model.Customer;
import com.model.Product;


@RestController
public class Productcontroller {
	
	  @Autowired
		private ProductDao prodDao;
	     
	     @RequestMapping("getProducts")
	  	public List<Product> getAllProducts() {
	  		return prodDao.getAllProducts();
	  	}
	     
	     @RequestMapping("getProductById/{ID}")
	  	public Optional<Product>  getProductById(@PathVariable("ID")int id){
	  		return prodDao.getProductById(id);
	  	}
	     
	     @RequestMapping("getProductsByCategory/{category}")
		  	public List<Product> getProductsByCategory(@PathVariable("category")String category){
		  		return prodDao.getProductsByCategory(category);
		  	}
		     
		

	     @PostMapping("/registerProduct")
	     public String imageOrFile(
	    		 @RequestParam("prodName") String prodName,
	    		 @RequestParam("prodCategory") String prodCategory,
	    		 @RequestParam("prodBrand") String prodBrand,
	    		 @RequestParam("prodDesc") String prodDesc,
	    		 @RequestParam("price") double price,
	    		 @RequestParam("file") MultipartFile file
	    		 ) throws IOException {
	             return prodDao.registerProduct(prodName,prodCategory,prodBrand,prodDesc,price,file);
	         
	     }
	     
	     

	 	@PutMapping("updateProduct")
	 	public Product updateProduct(@RequestBody Product Product){
	 		return prodDao.updateProduct(Product);
	 	}
	 	
	 	
	 	@DeleteMapping("deleteProduct")
	 	public void deleteProductById(@RequestParam int id){
	 		prodDao.deleteProductById(id);
	 		
	 	}
	 	
	 	  @RequestMapping("getPrductsByBrand/{brand}")
	     public List<Product> getProductsByBrand(@PathVariable String brand) {
	         return prodDao.getProductsByBrand(brand);
	     }
	 	

}
