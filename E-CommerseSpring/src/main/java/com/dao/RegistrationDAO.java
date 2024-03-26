package com.dao;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;

@Service
public class RegistrationDAO {
	@Autowired
      RegistrationRepository repo;
	public List<User> getAllUsers() {
		return repo.findAll();
	}
    public User saveUser(User user) {
      return repo.save(user);
    }
    public User fetchUserByEmailid(String email) {
    	return repo.findByEmailid(email);
    }
    public User fetchUserByEmailidAndPassword(String email,String password) {
    	 return repo.findByEmailidAndPassword(email, password);
    }
}

