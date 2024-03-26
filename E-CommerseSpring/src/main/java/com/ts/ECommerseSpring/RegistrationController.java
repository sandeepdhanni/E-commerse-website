package com.ts.ECommerseSpring;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.RegistrationDAO;
import com.model.User;
@RestController
public class RegistrationController {
	@Autowired
	RegistrationDAO regDAO;
	@RequestMapping("getUsers")
	public List<User> getAllUsers() {
		return regDAO.getAllUsers();
	}
	
	@PostMapping("RegisterUser")
    public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailid = user.getEmailid();
		if(tempEmailid  != null && !"" .equals(tempEmailid)) {
			User userobj = regDAO.fetchUserByEmailid(tempEmailid);
		    if(userobj != null) {
		    	throw new Exception("s with "+tempEmailid+" is already exsist");
		    }
		}
    	User userobj=null;
    	userobj=regDAO.saveUser(user);
    	return userobj;
    }
	
	@PostMapping("login")
	public User loginUser(@RequestBody User user)  throws Exception {
		String tempEmailid = user.getEmailid();
		String tempPassword= user.getPassword();
		User userobj = null;
		if(tempEmailid != null && tempPassword != null) {
			userobj=regDAO.fetchUserByEmailidAndPassword(tempEmailid,tempPassword);
		}
		if(userobj == null) {
			throw new Exception("bad credentials");
		}
		return userobj;
	}
}
