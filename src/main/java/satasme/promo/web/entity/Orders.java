package satasme.promo.web.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_orders")
public class Orders {
	@Id
	@Column(name="id_userorders")
	String id;
	@Column(name="social_name")
	String social;
	@Column(name="social_link")
	String social_link;
	@Column(name="service")
	String service;
	@Column(name="qty")
	String qty;
	@Column(name="cost")
	double cost;
	@Column(name="country")
	String country;
	@Column(name="agegroup")
	String agegroup;
	@Column(name="gender")
	String gender;
	@Column(name="crr_date")
	Date date;
	@Column(name="pay_method")
	String pay_method;
	@Column(name="status")
	String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	

	public Orders() {
		super();
	}


	public Orders(String id, String social, String social_link, String service, String qty, double cost, String country,
			String agegroup, String gender, Date date, String pay_method, String status, User user) {
		super();
		this.id = id;
		this.social = social;
		this.social_link = social_link;
		this.service = service;
		this.qty = qty;
		this.cost = cost;
		this.country = country;
		this.agegroup = agegroup;
		this.gender = gender;
		this.date = date;
		this.pay_method = pay_method;
		this.status = status;
		this.user = user;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getSocial() {
		return social;
	}


	public void setSocial(String social) {
		this.social = social;
	}


	public String getSocial_link() {
		return social_link;
	}


	public void setSocial_link(String social_link) {
		this.social_link = social_link;
	}


	public String getService() {
		return service;
	}


	public void setService(String service) {
		this.service = service;
	}


	public String getQty() {
		return qty;
	}


	public void setQty(String qty) {
		this.qty = qty;
	}


	public double getCost() {
		return cost;
	}


	public void setCost(double cost) {
		this.cost = cost;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getAgegroup() {
		return agegroup;
	}


	public void setAgegroup(String agegroup) {
		this.agegroup = agegroup;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getPay_method() {
		return pay_method;
	}


	public void setPay_method(String pay_method) {
		this.pay_method = pay_method;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}



	

	
	
}
