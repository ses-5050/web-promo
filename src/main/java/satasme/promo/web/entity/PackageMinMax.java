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
@Table(name="packageminmax")
public class PackageMinMax {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_packageminmax")
	long id;
	@Column(name="social_name")
	String social_name;
	@Column(name="service")
	String service;
	@Column(name="min")
	int min;
	@Column(name="max")
	int max;
	
	
	
	public PackageMinMax() {
		super();
	}

	
	public PackageMinMax(String social_name, String service, int min, int max) {
		super();
		this.social_name = social_name;
		this.service = service;
		this.min = min;
		this.max = max;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public int getMin() {
		return min;
	}
	public void setMin(int min) {
		this.min = min;
	}
	public int getMax() {
		return max;
	}
	public void setMax(int max) {
		this.max = max;
	}

	public String getSocial_name() {
		return social_name;
	}

	public void setSocial_name(String social_name) {
		this.social_name = social_name;
	}
	
	
}
