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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.UserSocialEngagement;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.OrdersRepository;
import satasme.promo.web.repository.PaymentReceiverRepositoryImpl;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;
import satasme.promo.web.repository.UserSocialEngagementRepository;
import satasme.promo.web.repository.UserSocialEngagementRepositoryImpl;

@RestController
@RequestMapping("/api/socialengage")
public class SocialEngagementController {
	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private UserSocialEngagementRepository engagementsrep;
	@Autowired
	private UserSocialEngagementRepositoryImpl engagementsImpl;

	@PostMapping
	public String enagageInSocial(@RequestBody ObjectNode node) {
		String service = node.get("service").asText();
		String userid = node.get("userid").asText();
		String orderid = node.get("orderid").asText();
		Criteria cr1 = em.unwrap(Session.class).createCriteria(User.class);
		cr1.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr1.uniqueResult();
		Criteria cr2 = em.unwrap(Session.class).createCriteria(Orders.class);
		cr2.add(Restrictions.eq("id", orderid));
		Orders order = (Orders) cr2.uniqueResult();
		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);
		cr.add(Restrictions.eq("pointSource", service));
		Points points = (Points) cr.uniqueResult();
		

		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", user));
		cre.add(Restrictions.eq("date", crrdate));
		List<UserPoints> po_list = cre.list();
		double totalpoints = 0;
		for (UserPoints up : po_list) {
			totalpoints += up.getPoints();
		}
		totalpoints=totalpoints+points.getPoints();
		if (totalpoints >= 100) {
			return "exceed";
		} else {
			UserSocialEngagement engagement = new UserSocialEngagement();
			engagement.setService(service);
			engagement.setDate(crrdate);
			engagement.setUser(user);
			engagement.setOrders(order);
			this.engagementsrep.save(engagement);

			
			//add points
			
			UserPoints userPoints = new UserPoints();
			userPoints.setPoints(points.getPoints());
			userPoints.setPointSource(service);
			userPoints.setDate(crrdate);
			userPoints.setStatus("Active");
			userPoints.setUser(user);
			this.userPointsRepository.save(userPoints);

			return "success";
		}

		
	}

	@GetMapping("/{id}/{service}")
	public List<SocialEngagementResponse> getEngagementsByUser(@PathVariable(value = "id") long userid,
			@PathVariable(value = "service") String service) {

		return engagementsImpl.findEngagementsById(userid, service);
	}
}
