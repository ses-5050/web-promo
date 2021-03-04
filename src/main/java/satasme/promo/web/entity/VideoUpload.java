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
@Table(name = "uploadvideos")
public class VideoUpload {
	@Id
	@Column(name = "id_video")
	String id;
	@Column(name = "vname")
	String vname;
	@Column(name = "category")
	String category;
	@Column(name = "hashtags")
	String hashtags;
	@Column(name = "duration")
	String duration;
	@Column(name = "submit_date")
	String submitdate;
	@Column(name = "imageurl")
	String imageurl;
	@Column(name = "videourl")
	String videourl;
	@Column(name = "status")
	String status;
	@ManyToOne
	@JoinColumn(name="userid",referencedColumnName="id_user")
	private User user;

	public VideoUpload() {
		super();
	}

	public VideoUpload(String vname, String category, String hashtags, String duration, String imageurl,
			String videourl, String status,User user,String submitdate) {
		super();
		this.vname = vname;
		this.category = category;
		this.hashtags = hashtags;
		this.duration = duration;
		this.imageurl = imageurl;
		this.videourl = videourl;
		this.status = status;
		this.user=user;
		this.submitdate=submitdate;
	}

	public String getSubmitdate() {
		return submitdate;
	}

	public void setSubmitdate(String submitdate) {
		this.submitdate = submitdate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getHashtags() {
		return hashtags;
	}

	public void setHashtags(String hashtags) {
		this.hashtags = hashtags;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getVideourl() {
		return videourl;
	}

	public void setVideourl(String videourl) {
		this.videourl = videourl;
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

}
