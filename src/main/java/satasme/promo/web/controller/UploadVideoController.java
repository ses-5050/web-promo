package satasme.promo.web.controller;

import java.nio.ByteBuffer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.VideoUpload;
import satasme.promo.web.repository.UploadVideoRepository;
import satasme.promo.web.repository.UploadVideoRepositoryCustom;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;
import satasme.promo.web.service.FilesStorageService;

@RestController
@RequestMapping("/api/uploadvideo")
public class UploadVideoController {
	@Autowired
	private FilesStorageService storageService;
	@Autowired
	private UploadVideoRepository uploadVideoRepository;
	@Autowired
	private UploadVideoRepositoryCustom uploadVideoRepositoryCustom;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@PersistenceContext
	protected EntityManager em;

	@PostMapping("/{id}")
	public String uploadFile(@PathVariable(value = "id") long userid, @RequestParam("category") String category,
			@RequestParam("vname") String vname, @RequestParam("hashtag") String hashtag,
			@RequestParam("duration") String duration,@RequestParam("psource") String psource, @RequestParam("video") MultipartFile video,
			@RequestParam("thumbnail") MultipartFile thumb) {
		String message1 = "";
		String message2 = "";
		boolean errorfound = false;
		UUID randomUUID = UUID.randomUUID();
		long l = ByteBuffer.wrap(randomUUID.toString().getBytes()).getLong();
		String idUploadVideos = Long.toString(l, Character.MAX_RADIX);
		try {
			storageService.save(video, userid, idUploadVideos);

			message1 = "Uploaded the file successfully: " + video.getOriginalFilename();
			System.out.println("*********************** " + message1);
		} catch (Exception e) {
			errorfound = true;
			message1 = "Could not upload the file: " + video.getOriginalFilename() + "!";
			System.out.println("*********************** " + message1);
		}
		try {
			storageService.save(thumb, userid, idUploadVideos);

			message2 = "Uploaded the file successfully: " + thumb.getOriginalFilename();
			System.out.println("*********************** " + message2);

		} catch (Exception e) {
			errorfound = true;
			message2 = "Could not upload the file: " + thumb.getOriginalFilename() + "!";
			System.out.println("*********************** " + message2);

		}
		if (errorfound) {
			return "failed to upload videos";
		} else {
			Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
			cr.add(Restrictions.eq("id", userid));
			User crruser = (User) cr.uniqueResult();

			String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());

			VideoUpload videoUpload = new VideoUpload();
			videoUpload.setId(idUploadVideos);
			videoUpload.setCategory(category);
			videoUpload.setVname(vname);
			videoUpload.setHashtags(hashtag);
			videoUpload.setDuration(duration);
			videoUpload.setImageurl("uploads/" + userid + "/" + idUploadVideos + "/" + thumb.getOriginalFilename());
			videoUpload.setVideourl("uploads/" + userid + "/" + idUploadVideos + "/" + video.getOriginalFilename());
			videoUpload.setUser(crruser);
			videoUpload.setStatus("Pending");
			videoUpload.setSubmitdate(crrdate);
			this.uploadVideoRepository.save(videoUpload);
			if (psource.equals("Video Upload")) {
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
				cr2.add(Restrictions.eq("pointSource", psource));
				Points points = (Points) cr2.uniqueResult();
				UserPoints userPoints=new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource(psource);
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(crruser);
				this.userPointsRepository.save(userPoints);
			}
			
			return "success";
		}
	}

	@GetMapping("/{id}")
	public List<VideoUpload> getListFiles(@PathVariable(value = "id") long userid) {

		return uploadVideoRepositoryCustom.finduploadsById(userid);

	}
	
	@GetMapping
	public List<VideoUpload> getListFiles() {

		Criteria crpk = em.unwrap(Session.class).createCriteria(VideoUpload.class);
		return crpk.list();

	}
}
