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
@Table(name="user_feedback")
public class UserFeedback {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "qtype")
	private String qtype;
	@Column(name = "subject")
	private String subject;
	@Column(name = "message")
	private String message;
	@Column(name = "date")
	private String date;
	@Column(name = "msgresponse")
	private String msgresponse;
	@Column(name = "status")
	private String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;
	
	public UserFeedback() {
		super();
	}

	public UserFeedback(String qtype, String subject, String message, String msgresponse, String status, User user) {
		super();
		this.qtype = qtype;
		this.subject = subject;
		this.message = message;
		this.msgresponse = msgresponse;
		this.status = status;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQtype() {
		return qtype;
	}

	public void setQtype(String qtype) {
		this.qtype = qtype;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMsgresponse() {
		return msgresponse;
	}

	public void setMsgresponse(String msgresponse) {
		this.msgresponse = msgresponse;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
}
