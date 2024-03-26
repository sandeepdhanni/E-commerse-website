package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.model.Customer;



@Service
public class CustomerDAO {
	
	@Autowired
	CustomerRepository customerRepo;
	
	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}     
	
	public Customer getCustomerById(int id){
	Customer cust =new Customer(1,"raghu","male","9876543210","raghu@ts.com","raghu123");
	   return customerRepo.findById(id).orElse(cust);
//		return customerRepo.findById((id);
		
	}
	public Customer registerCustomer(Customer Customer) {
		return customerRepo.save(Customer);
	}
	
	public Customer updateCustomer(Customer Customer){
		return customerRepo.save(Customer);
	}
	public void deleteCustomerById(int id){
	 customerRepo.deleteById(id);
	 
	}
	

}
