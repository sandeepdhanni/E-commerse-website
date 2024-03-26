package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {
	@Id
	@GeneratedValue (strategy=GenerationType.AUTO)
	private int customerId;
	private String custName;
	private  String mobileNo;
	private String gender;
	private String email;
	private String password;
	
	public Customer(){}
	
	public Customer(int customerId,String custName,String gender,String mobileNo,String email,String password){
		super();
		
		this.customerId=customerId;
		this.custName=custName;
		this.gender=gender;
		this.mobileNo=mobileNo;
		this.password=password;
		this.email=email;
		
		
	}

	

	public int getcustomerId() {
		return customerId;
	}

	public void setcustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", custName=" + custName + ", mobileNo=" + mobileNo + ", gender=" + gender
				+ ", email=" + email + ", password=" + password + "]";
	}

}
