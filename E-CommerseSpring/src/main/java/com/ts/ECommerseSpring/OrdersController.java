package com.ts.ECommerseSpring;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.OrdersDao;
import com.model.Orders;

@RestController
public class OrdersController {
	

	 @Autowired
	OrdersDao ordersDao;
	 
    @RequestMapping("getAllOrders")
 	public List<Orders> getAllOrders() {
 		return ordersDao.getAllOrders();
 	}
    
	 @GetMapping("/getCustomerOrder/{customerId}")
		public List<Orders> getCustomerOrders(@PathVariable int customerId){
			return ordersDao.getOrdersByCustomerId(customerId);
		}
	 
	 @DeleteMapping("deleteOrderById/{id}")
		public void deleteOrders(@PathVariable("id") int orderId) {
		 ordersDao.deleteOrdersById(orderId);
		}
		
    
	  @PostMapping("addOrders")
	 	public Orders registerOrders(@RequestBody Orders order) {
	 		return ordersDao.registerOrders(order);
	 	}

}
