package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.model.RandomString;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/userref")
public class ReferralControler {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@PersistenceContext
	protected EntityManager em;
	
	@GetMapping("/{id}")
	public String getReferral(@PathVariable(value = "id") long userid) {
		User user=userRepository.findById(userid).orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		String ref=user.getRefcode();
		return "emoneytag.com/register?ref="+ref.replace("[", "");
	}
	
	@PostMapping
	public String createUser(@RequestBody ObjectNode node) {
		try {
			User user = new User();
			if (node.get("email") != null) {
				user.setEmail(node.get("email").asText());
			}
			String token = node.get("token").asText();
			user.setStatus("Active");
			user.setLevel("Beginner");
			ExampleMatcher modelMatcher = ExampleMatcher.matching().withIgnorePaths("id");
			Example<User> userexample = Example.of(user, modelMatcher);
			if (userRepository.exists(userexample)) {
				return "Already exist";
			} else {
				if (node.get("fname") != null) {
					user.setFname(node.get("fname").asText());
				}
				if (node.get("lname") != null) {
					user.setLname(node.get("lname").asText());
				}
				if (node.get("img") != null) {
					user.setImg(node.get("img").asText());
				}
				if (node.get("mobile") == null) {
					user.setMobile(0);
				} else {
					user.setMobile(node.get("mobile").asInt());
				}
				if (node.get("location") != null) {
					user.setLocation(node.get("location").asText());
				}
				if (node.get("country") != null) {
					user.setCountry(node.get("country").asText());
				}
				if (node.get("gender") != null) {
					user.setGender(node.get("gender").asText());
				}
				if (node.get("dob") != null) {
					user.setDob(node.get("dob").asText());
				}
				if (node.get("specialization") != null) {
					user.setSpecialization(node.get("specialization").asText());
				}
				if (node.get("education") != null) {
					user.setEducation(node.get("education").asText());
				}
				RandomString gen = new RandomString(8, ThreadLocalRandom.current());
				user.setRefcode(gen.getBuf().toString());
				this.userRepository.save(user);
				Login login = new Login();
				if (node.get("key") != null) {
					login.setKey(node.get("key").asText());
				}
				login.setIsloggedin(false);
				login.setUser(user);
				this.loginRepository.save(login);
				//need to add earnings for the ref
				Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
				cr.add(Restrictions.eq("refcode", token));
				User crruser = (User) cr.uniqueResult();

				String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
				cr2.add(Restrictions.eq("pointSource", "Referal"));
				Points points = (Points) cr2.uniqueResult();
				UserPoints userPoints=new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource("Referal");
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(crruser);
				this.userPointsRepository.save(userPoints);
				
				return "Success";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "Server error. Try again later";
		}

	}
}
