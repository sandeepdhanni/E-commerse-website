package com.ts.ECommerseSpring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.model.Customer;


@RestController
public class CustomerController {
     @Autowired
	CustomerDAO custDao;
     
     @RequestMapping("getAllCustomers")
  	public List<Customer> getAllCustomers() {
  		return custDao.getAllCustomers();
  	}
     
     @RequestMapping("getCustomerById/{ID}")
  	public Customer  getCustomerById(@PathVariable("ID")int id){
  		return custDao.getCustomerById(id);
  	}
	
     @PostMapping("registerCustomer")
 	public Customer registerCustomer(@RequestBody Customer Customer) {
 		return custDao.registerCustomer(Customer);
 	}
 	
 	@PutMapping("updateCustomer")
 	public Customer updateCustomer(@RequestBody Customer Customer){
 		return custDao.updateCustomer(Customer);
 	}
 	
 	
 	@DeleteMapping("deleteCustomer")
 	public void deleteCustomerById(@RequestParam int id){
 		custDao.deleteCustomerById(id);
 		
 	}
 	
 	
 

}
