package com.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//@Entity
//public class User {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//	private String emailid;
//	private String username;
//	private String password;
//	private String brandname;
//	public User() {
//		
//	}
	/*public User(int id, String emailid, String username, String password) {
		super();
		this.id = id;
		this.emailid = emailid;
		this.username = username;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", emailid=" + emailid + ", username=" + username + ", password=" + password + "]";
	}*/
//	public User(int id, String emailid, String username, String password, String brandname) {
//		super();
//		this.id = id;
//		this.emailid = emailid;
//		this.username = username;
//		this.password = password;
//		this.brandname = brandname;
//	}
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getEmailid() {
//		return emailid;
//	}
//	public void setEmailid(String emailid) {
//		this.emailid = emailid;
//	}
//	public String getUsername() {
//		return username;
//	}
//	public void setUsername(String username) {
//		this.username = username;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public String getBrandname() {
//		return brandname;
//	}
//	public void setBrandname(String brandname) {
//		this.brandname = brandname;
//	}
//	@Override
//	public String toString() {
//		return "User [id=" + id + ", emailid=" + emailid + ", username=" + username + ", password=" + password
//				+ ", brandname=" + brandname + "]";
//	}
//	
//
//}
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    @Column(unique=true)
    private String emailid;
    private String password;
    private String brandname;
    
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int id, String emailid, String username, String password, String brandname) {
		super();
		this.id = id;
		this.emailid = emailid;
		this.username = username;
		this.password = password;
		this.brandname = brandname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBrandname() {
		return brandname;
	}

	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", emailid=" + emailid + ", username=" + username + ", password=" + password
				+ ", brandname=" + brandname + "]";
	}
  
}

