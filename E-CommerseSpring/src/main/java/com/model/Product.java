package com.model;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Product {
	@Id
	@GeneratedValue (strategy=GenerationType.AUTO)
  private  long productId;
  private String prodName;
  private String prodCategory;
  private String prodBrand;
  private String prodDesc;
  private double price;
  @Lob
  private byte[] imageData;
  
public Product(String prodName, String prodCategory,String prodBrand, String prodDesc, double price, byte[] imageData) {
	super();
	this.productId = productId;
	this.prodName = prodName;
	this.prodCategory = prodCategory;
	this.prodBrand = prodBrand;
	this.prodDesc = prodDesc;
	this.price = price;
	this.imageData = imageData;
}

public Product(){};


public long getProductId() {
	return productId;
}

public void setProductId(long productId) {
	this.productId = productId;
}

public String getProdName() {
	return prodName;
}

public void setProdName(String prodName) {
	this.prodName = prodName;
}

public String getProdCategory() {
	return prodCategory;
}


public void setProdCategory(String prodCategory) {
	this.prodCategory = prodCategory;
}

public String getProdBrand() {
	return prodBrand;
}

public void setProdBrand(String prodBrand) {
	this.prodBrand = prodBrand;
}

public String getProdDesc() {
	return prodDesc;
}

public void setProdDesc(String prodDesc) {
	this.prodDesc = prodDesc;
}

public double getPrice() {
	return price;
}

public void setPrice(double price) {
	this.price = price;
}

public byte[] getImagedata() {
	return imageData;
}

public void setImagedata(byte[] imageData) {
	this.imageData = imageData;
}

@Override
public String toString() {
	return "Product [productId=" + productId + ", prodName=" + prodName +", prodCategory=" + prodCategory + ", prodBrand=" + prodBrand + ", prodDesc=" + prodDesc
			+ ", price=" + price + ", imageData=" + Arrays.toString(imageData) + "]";
}
  
  
}

