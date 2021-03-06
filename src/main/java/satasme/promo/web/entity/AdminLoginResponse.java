package satasme.promo.web.entity;

public class AdminLoginResponse {

	long adminid;
	String role;
	
	public AdminLoginResponse() {
		super();
	}

	public AdminLoginResponse(long adminid, String role) {
		super();
		this.adminid = adminid;
		this.role = role;
	}

	public long getAdminid() {
		return adminid;
	}

	public void setAdminid(long adminid) {
		this.adminid = adminid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
}
