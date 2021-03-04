package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "adminlogin")
public class AdminLogin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_admin")
	long id;
	@Column(name="uname")
	String username;
	@Column(name="email")
	String email;
	@Column(name="password")
	String password;
	@Column(name="role")
	String role;
	@Column(name="status")
	String status;
	
	public AdminLogin() {
		super();
	}
	
	public AdminLogin(String username, String email, String password, String role, String status) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
		this.status = status;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
