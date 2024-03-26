package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Orders;

@Service
public class OrdersDao {

	@Autowired
	OrdersRepository  ordersRepo;
	
	public List<Orders> getAllOrders() {
		return ordersRepo.findAll();
	}  
	
	  public List<Orders> getOrdersByCustomerId(int customerId) {
			return ordersRepo.findByCustomerId(customerId);
		}
	  
	  
	  public void deleteOrdersById(int id){
			 ordersRepo.deleteById(id);	 
		}
	  
	  public Orders registerOrders(Orders order) {
			return ordersRepo.save(order);
		}
	  
}
