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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.ProfileDetailResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.PaymentReceiverRepositoryImpl;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private PaymentReceiverRepositoryImpl paymentRepositoryImpl;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	
	
	@GetMapping("/{id}")
	public String getReferral(@PathVariable(value = "id") long userid) {
		String responseText="";
		double total_points=0;
		User user=userRepository.findById(userid).orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		if (user.getFname()!=null) {
			total_points+=6.5;
		}
		if (user.getLname()!=null) {
			total_points+=6.5;
		}
		if(user.getImg()!=null) {
			total_points+=6.5;
		}
		if (user.getMobile()!=0) {
			total_points+=6.5;
		}
		if (user.getStatus()!="notverified") {
			total_points+=6.5;
		}
		if (user.getDob()!=null) {
			total_points+=6.5;
		}
		if (user.getEducation()!=null) {
			total_points+=6.5;
		}
		if (user.getGender()!=null) {
			total_points+=6.5;
		}
		if (user.getSpecialization()!=null) {
			total_points+=6.5;
		}
		
		PaymentReceiver payList=paymentRepositoryImpl.findUserFullDetails(user.getId());
		if (payList.getCity()!=null) {
			total_points+=4.61;
		}
		if (payList.getCountry()!=null) {
			total_points+=4.61;
		}
		if (payList.getCurrency()!=null) {
			total_points+=4.61;
		}
		if (payList.getFname()!=null) {
			total_points+=4.61;
		}
		if (payList.getLname()!=null) {
			total_points+=4.61;
		}
		if (payList.getPostal()!=null) {
			total_points+=4.61;
		}
		if (payList.getRegion()!=null) {
			total_points+=4.61;
		}
		if (payList.getStreet()!=null) {
			total_points+=4.61;
		}
		if (payList.getAddresno()!=null) {
			total_points+=4.61;
		}
		
		if(total_points==99.99) {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserPoints.class);
			cr.add(Restrictions.eq("user", user));
			cr.add(Restrictions.eq("pointSource", "Profile Completion"));
			if (cr.list()!=null) {
				String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Points.class);
				cr2.add(Restrictions.eq("pointSource", "Profile Completion"));
				Points points = (Points) cr2.uniqueResult();
				UserPoints userPoints=new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource("Profile Completion");
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(user);
				this.userPointsRepository.save(userPoints);
			}
			
			responseText="compeleted";
		}else {
			int round_ponts = (int) total_points;
			responseText="Your profile is "+round_ponts+"% completed.";
		}
		return responseText;
	}
	
	@GetMapping("/detail/{id}")
	public ProfileDetailResponse getProfileDetail(@PathVariable(value = "id") long userid) {
		ProfileDetailResponse pdr=new ProfileDetailResponse();
		Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
		cr2.add(Restrictions.eq("id", userid));
		User crruser = (User) cr2.uniqueResult();
		pdr.setEmail(crruser.getEmail());
		if (crruser.getMobile()==0) {
			pdr.setMobile("Not Selected");
		}else {
			pdr.setMobile(""+crruser.getMobile());
		}
		double total_points=0;
		Criteria cre = em.unwrap(Session.class).createCriteria(UserPoints.class);
		cre.add(Restrictions.eq("user", crruser));
		cre.add(Restrictions.eq("status", "Active"));
		List<UserPoints> list = cre.list();
		for (UserPoints up : list) {
			total_points+=up.getPoints();
		}
		pdr.setPoints("$"+total_points);
		
		return pdr;
	}
}
