package com.dao;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.model.User;

@Repository
public interface RegistrationRepository extends JpaRepository<User,Integer>{
   public User findByEmailid(String emailid);
   public User findByEmailidAndPassword(String emailid,String Password);
}


