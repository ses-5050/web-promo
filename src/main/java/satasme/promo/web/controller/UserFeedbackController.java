package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.List;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserFeedback;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.UserFeedbackRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/userfeedback")
public class UserFeedbackController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserFeedbackRepository userFeedbackRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private JavaMailSender javaMailSender;
	
	@PostMapping("/{id}")
	public String saveUserFedback(@PathVariable(value = "id") long userid,@RequestBody ObjectNode node) {
		try {
			Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
			cr2.add(Restrictions.eq("id",  userid));
			User crruser = (User) cr2.uniqueResult();
			UserFeedback uf=new UserFeedback();
			uf.setMessage(node.get("message").asText());
			uf.setQtype(node.get("qtype").asText());
			uf.setSubject(node.get("subject").asText());
			uf.setUser(crruser);
			uf.setStatus("Active");
			String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
			uf.setDate(crrdate);
			this.userFeedbackRepository.save(uf);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "failed";
		}
	}
	
	@GetMapping("/all")
	public List<UserFeedback> getAllUserFedback() {
		Criteria cr2 = em.unwrap(Session.class).createCriteria(UserFeedback.class);
		cr2.add(Restrictions.eq("status",  "Active"));
		if (cr2.list().isEmpty()) {
			List<UserFeedback> f_list = new ArrayList<>();
			return f_list;
		}else {
			return cr2.list();
		}
	}
	
	@GetMapping("{id}")
	public List<UserFeedback> getFedbackbyUser(@PathVariable(value = "id") long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id",  userid));
		User crruser = (User) cr.uniqueResult();
		Criteria cr2 = em.unwrap(Session.class).createCriteria(UserFeedback.class);
		cr2.add(Restrictions.eq("status",  "Active"));
		cr2.add(Restrictions.eq("user",  crruser));
		if (cr2.list().isEmpty()) {
			List<UserFeedback> f_list = new ArrayList<>();
			return f_list;
		}else {
			return cr2.list();
		}
	}
	
	@PostMapping("/send")
	public String sendUserFedback(@RequestBody ObjectNode node) {
		try {
			Criteria cr = em.unwrap(Session.class).createCriteria(UserFeedback.class);
			cr.add(Restrictions.eq("id",  Long.valueOf(node.get("feedid").asText())));
			UserFeedback feedback = (UserFeedback) cr.uniqueResult();
			feedback.setMsgresponse(node.get("message").asText());
			feedback.setStatus("Sent");
			String emailtext = "This email is send to you regarding your question: "+feedback.getMessage()+".    Reply:"+node.get("message").asText();
			sendEmail(feedback.getUser().getEmail(), "Support Contact For EmoneyTag", emailtext);
			this.userFeedbackRepository.save(feedback);
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "failed";
		}
	}
	
	void sendEmail(String to, String subject, String text) {

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setFrom("noreply@emoneytag.com");
		msg.setTo(to);
		msg.setSubject(subject);
		msg.setText(text);

		javaMailSender.send(msg);

	}
}
