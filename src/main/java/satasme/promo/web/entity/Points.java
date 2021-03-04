package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "points")
public class Points {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_points")
	long id;
	@Column(name="p_source")
	String pointSource;
	@Column(name="points")
	double points;
	@Column(name="status")
	String status;
	
	public Points() {
		super();
	}

	public Points(String pointSource, double points, String status) {
		super();
		this.pointSource = pointSource;
		this.points = points;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPointSource() {
		return pointSource;
	}

	public void setPointSource(String pointSource) {
		this.pointSource = pointSource;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
