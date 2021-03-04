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
@Table(name="package")
public class Packages {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_package")
	long id;
	@Column(name="count")
	int count;
	@Column(name="price")
	double price;
	@Column(name="country")
	String country;
	@ManyToOne
	@JoinColumn(name="packageminmaxid",referencedColumnName="id_packageminmax")
	private PackageMinMax packageMinMax;
	
	
	public Packages() {
		super();
	}

	

	public Packages(long id, int count, double price, String country, PackageMinMax packageMinMax) {
		super();
		this.id = id;
		this.count = count;
		this.price = price;
		this.country = country;
		this.packageMinMax = packageMinMax;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public PackageMinMax getPackageMinMax() {
		return packageMinMax;
	}

	public void setPackageMinMax(PackageMinMax packageMinMax) {
		this.packageMinMax = packageMinMax;
	}
	
	
}
