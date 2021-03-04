package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="paymentreceiver")
public class PaymentReceiver {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_payreceiver")
	long id;
	@Column(name="fname")
	String fname;
	@Column(name="lname")
	String lname;
	@Column(name="addresno")
	String addresno;
	@Column(name="street")
	String street;
	@Column(name="city")
	String city;
	@Column(name="region")
	String region;
	@Column(name="postal")
	String postal;
	@Column(name="country")
	String country;
	@Column(name="currency")
	String currency;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public PaymentReceiver() {
		super();
	}
	
	public PaymentReceiver(String fname, String lname, String street, String city, String region, String postal,
			String country, String currency, User user,String addresno) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.street = street;
		this.city = city;
		this.region = region;
		this.postal = postal;
		this.country = country;
		this.currency = currency;
		this.user = user;
		this.addresno=addresno;
	}
	
	public String getAddresno() {
		return addresno;
	}

	public void setAddresno(String addresno) {
		this.addresno = addresno;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getPostal() {
		return postal;
	}
	public void setPostal(String postal) {
		this.postal = postal;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
