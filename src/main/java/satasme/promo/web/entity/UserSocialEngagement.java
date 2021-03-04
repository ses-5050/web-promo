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
@Table(name = "usersocialengagement")
public class UserSocialEngagement {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_socialengagement")
	long id;
	@Column(name="date")
	String date;
	@Column(name="service")
	String service;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	@ManyToOne
	@JoinColumn(name="ordersid",referencedColumnName="id_userorders")
	private Orders orders;
	
	public UserSocialEngagement() {
		super();
	}

	public UserSocialEngagement(String date, String service, User user, Orders orders) {
		super();
		this.date = date;
		this.service = service;
		this.user = user;
		this.orders = orders;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Orders getOrders() {
		return orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}
	
	
	
}
