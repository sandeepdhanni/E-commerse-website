package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Orders {

	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private String Address;
	private String orderStatus;
	private Double orderAmount;
	private String  PaymentType;
	private String  productSize;
	private String  productQuantity;
	private int customerId;
	
	  
	  @ManyToOne
	  @JoinColumn(name = "productId")
	  private Product product;

	  public Orders(){}

	public Orders(int orderId, String address, String orderStatus, Double orderAmount, String paymentType,
			String productSize, String productQuantity, int customerId, Product product) {
		super();
		this.orderId = orderId;
		Address = address;
		this.orderStatus = orderStatus;
		this.orderAmount = orderAmount;
		PaymentType = paymentType;
		this.productSize = productSize;
		this.productQuantity = productQuantity;
		this.customerId = customerId;
		this.product = product;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Double getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(Double orderAmount) {
		this.orderAmount = orderAmount;
	}

	public String getPaymentType() {
		return PaymentType;
	}

	public void setPaymentType(String paymentType) {
		PaymentType = paymentType;
	}

	public String getProductSize() {
		return productSize;
	}

	public void setProductSize(String productSize) {
		this.productSize = productSize;
	}

	public String getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(String productQuantity) {
		this.productQuantity = productQuantity;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", Address=" + Address + ", orderStatus=" + orderStatus + ", orderAmount="
				+ orderAmount + ", PaymentType=" + PaymentType + ", productSize=" + productSize + ", productQuantity="
				+ productQuantity + ", customerId=" + customerId + ", product=" + product + "]";
	}

	
	
}