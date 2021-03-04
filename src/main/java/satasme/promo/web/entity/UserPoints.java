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
@Table(name = "userpoints")
public class UserPoints {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_userpoints")
	long id;
	@Column(name="points")
	double points;
	@Column(name="p_source")
	String pointSource;
	@Column(name="earned_date")
	String date;
	@Column(name="status")
	String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public UserPoints() {
		super();
	}

	public UserPoints(double points, String pointSource, String date, String status, User user) {
		super();
		this.points = points;
		this.pointSource = pointSource;
		this.date = date;
		this.status = status;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public String getPointSource() {
		return pointSource;
	}

	public void setPointSource(String pointSource) {
		this.pointSource = pointSource;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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
