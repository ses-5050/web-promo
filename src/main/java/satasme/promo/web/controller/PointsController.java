package satasme.promo.web.controller;

import java.text.DecimalFormat;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.model.RandomString;
import satasme.promo.web.repository.PointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/points")
public class PointsController {

	@Autowired
	private PointsRepository pointsRepository;
	@PersistenceContext
	protected EntityManager em;

	@PostMapping
	public String createUser(@RequestBody ObjectNode node) {
		Points points = new Points();
		points.setPointSource(node.get("psource").asText());
		points.setPoints(node.get("points").asDouble());
		points.setStatus("Active");
		this.pointsRepository.save(points);

		return "success";
	}

	@GetMapping("/{id}/{type}")
	public String getEarningSummery(@PathVariable(value = "id") long userid,
			@PathVariable(value = "type") String type) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		double total_points=0;
		if (type.equals("all")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("social")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			cre.add(Restrictions.ne("pointSource", "Referals"));
			cre.add(Restrictions.ne("pointSource", "Youtube Video Watch"));
			cre.add(Restrictions.ne("pointSource", "Video Upload"));
			cre.add(Restrictions.ne("pointSource", "Profile Completion"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("video")) {
			Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cre.add(Restrictions.eq("user", user));
			cre.add(Restrictions.eq("status", "Active"));
			cre.add(Restrictions.eq("pointSource", "Youtube Video Watch"));
			List<UserPoints> list = cre.list();
			for (UserPoints up : list) {
				total_points+=up.getPoints();
			}
		}else if (type.equals("other")) {
			Criteria cr1 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr1.add(Restrictions.eq("user", user));
			cr1.add(Restrictions.eq("status", "Active"));
			cr1.add(Restrictions.eq("pointSource", "Video Upload"));
			List<UserPoints> v_list = cr1.list();
			for (UserPoints up : v_list) {
				total_points+=up.getPoints();
			}
			Criteria cr2 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr2.add(Restrictions.eq("user", user));
			cr2.add(Restrictions.eq("status", "Active"));
			cr2.add(Restrictions.eq("pointSource", "Referal"));
			List<UserPoints> r_list = cr2.list();
			for (UserPoints up : r_list) {
				total_points+=up.getPoints();
			}
			Criteria cr3 = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr3.add(Restrictions.eq("user", user));
			cr3.add(Restrictions.eq("status", "Active"));
			cr3.add(Restrictions.eq("pointSource", "Profile Completion"));
			List<UserPoints> p_list = cr3.list();
			for (UserPoints up : p_list) {
				total_points+=up.getPoints();
			}
		}
		double round_total = total_points*0.003;
		DecimalFormat df = new DecimalFormat("####0.00");
		return "$"+df.format(round_total);
	}
	
	@GetMapping("/{id}/limit")
	public String getEarnPercentage(@PathVariable(value = "id") long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		double total_points=0;
		
		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", user));
		cre.add(Restrictions.eq("status", "Active"));
		List<UserPoints> list = cre.list();
		for (UserPoints up : list) {
			total_points+=up.getPoints();
		}
		double round_total = total_points*0.003;
		double percent=(round_total/10)*100;
		DecimalFormat df = new DecimalFormat("####0.0");
		
		return "You've reached "+df.format(percent)+"% of payment threshold";
	}
}
