package satasme.promo.web.entity;

public class ProfileDetailResponse {

	String email;
	String mobile;
	String points;
	
	public ProfileDetailResponse() {
		super();
	}

	public ProfileDetailResponse(String email, String mobile, String points) {
		super();
		this.email = email;
		this.mobile = mobile;
		this.points = points;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPoints() {
		return points;
	}

	public void setPoints(String points) {
		this.points = points;
	}
	
	
}
