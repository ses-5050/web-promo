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
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_login")
	long id;
	@Column(name="is_loggedin")
	boolean isloggedin;
	@Column(name="last_login")
	String lastlogin;
	@Column(name="security_key")
	String key;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;

	public Login(){
		
	}

	

	public Login(boolean isloggedin, String lastlogin, String key, User user) {
		super();
		this.isloggedin = isloggedin;
		this.lastlogin = lastlogin;
		this.key = key;
		this.user = user;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Boolean getIsloggedin() {
		return isloggedin;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public void setIsloggedin(Boolean isloggedin) {
		this.isloggedin = isloggedin;
	}

	public String getLastlogin() {
		return lastlogin;
	}

	public void setLastlogin(String lastlogin) {
		this.lastlogin = lastlogin;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
