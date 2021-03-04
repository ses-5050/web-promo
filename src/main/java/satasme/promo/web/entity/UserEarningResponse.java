package satasme.promo.web.entity;

public class UserEarningResponse {

	String email;
	String fname;
	String lname;
	double earning;
	
	public UserEarningResponse() {
		super();
	}

	public UserEarningResponse(String email, String fname, String lname, double earning) {
		super();
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.earning = earning;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public double getEarning() {
		return earning;
	}

	public void setEarning(double earning) {
		this.earning = earning;
	}
	
}
