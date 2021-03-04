package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.UserSocialEngagement;
import satasme.promo.web.entity.VideoUpload;
import satasme.promo.web.repository.UploadVideoRepository;
import satasme.promo.web.repository.UploadVideoRepositoryCustom;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.service.FilesStorageService;

@RestController
@RequestMapping("/api/approvevideo")
public class ApproveVideoController {
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
	
	@GetMapping("/pending")
	public List<VideoUpload> getPendingVideos() {

		Criteria crpk = em.unwrap(Session.class).createCriteria(VideoUpload.class);
		crpk.add(Restrictions.eq("status", "Pending"));
		return crpk.list();
	}
	
	@GetMapping("/approved")
	public List<VideoUpload> getApprovedVideos() {

		Criteria crpk = em.unwrap(Session.class).createCriteria(VideoUpload.class);
		crpk.add(Restrictions.eq("status", "Pending"));
		return crpk.list();
	}
	
	@PostMapping
	public String approveVideos(@RequestBody ObjectNode node) {
		
		

		return "";
	}
}
