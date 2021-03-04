package satasme.promo.web.entity;

public class SocialEngagementResponse {

	String status;
	String url;
	String id;
	
	public SocialEngagementResponse() {
		super();
	}

	public SocialEngagementResponse(String status, String url, String id) {
		super();
		this.status = status;
		this.url = url;
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getid() {
		return id;
	}

	public void setid(String id) {
		this.id = id;
	}

	
}
