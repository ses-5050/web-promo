package satasme.promo.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="youtube_videos")
public class YoutubeVideos {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_youtube_videos")
	long id;
	@Column(name = "vname")
	String vname;
	@Column(name = "duration")
	String duration;
	@Column(name = "videourl")
	String videourl;
	@Column(name = "status")
	String status;
	
	public YoutubeVideos() {
		super();
	}

	public YoutubeVideos(String vname, String duration, String videourl, String status) {
		super();
		this.vname = vname;
		this.duration = duration;
		this.videourl = videourl;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
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
	
	
}
