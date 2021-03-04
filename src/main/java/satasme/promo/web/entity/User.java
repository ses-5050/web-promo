package satasme.promo.web.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_user")
	long id;
	@Column(name="f_name")
	String fname;
	@Column(name="l_name")
	String lname;
	@Column(name="email")
	String email;
	@Column(name="img")
	String img;
	@Column(name="mobile")
	int mobile;
	@Column(name="location")
	String location;
	@Column(name="status")
	String status;
	@Column(name="level")
	String level;
	@Column(name="country")
	String country;
	@Column(name="gender")
	String gender;
	@Column(name="dob")
	String dob;
	@Column(name="specialization")
	String specialization;
	@Column(name="education")
	String education;
	@Column(name="refcode")
	String refcode;
	
	
	public User() {
		
	}

	public User(String fname, String lname, String email, String img, int mobile, String location, String status,
			String level, String country, String gender, String dob, String specialization, String education,String refcode) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.img = img;
		this.mobile = mobile;
		this.location = location;
		this.status = status;
		this.level = level;
		this.country = country;
		this.gender = gender;
		this.dob = dob;
		this.specialization = specialization;
		this.education = education;
		this.refcode=refcode;
	}

	public String getRefcode() {
		return refcode;
	}

	public void setRefcode(String refcode) {
		this.refcode = refcode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	
	
	
}
