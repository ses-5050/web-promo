package satasme.promo.web.entity;

public class EarningResponse {

	String service;
	String url;
	String count;
	
	public EarningResponse() {
		super();
	}

	public EarningResponse(String service, String url, String count) {
		super();
		this.service = service;
		this.url = url;
		this.count = count;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}
	
}
