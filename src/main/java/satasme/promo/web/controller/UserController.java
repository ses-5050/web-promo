package satasme.promo.web.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.nio.ByteBuffer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

import javax.imageio.ImageIO;
import javax.mail.internet.MimeMessage;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.repository.query.parser.Part.IgnoreCaseType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.Points;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.VideoUpload;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.model.RandomString;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.PaymentReceiverRepository;
import satasme.promo.web.repository.PaymentReceiverRepositoryImpl;
import satasme.promo.web.repository.UserPointsRepository;
import satasme.promo.web.repository.UserRepository;
import satasme.promo.web.service.FilesStorageService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private PaymentReceiverRepository paymentRepository;
	@Autowired
	private PaymentReceiverRepositoryImpl paymentRepositoryImpl;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserPointsRepository userPointsRepository;
	@Autowired
	private FilesStorageService storageService;
	@Autowired
	private JavaMailSender javaMailSender;

	@GetMapping
	public List<Login> getAllUsers() {
		return this.loginRepository.findAll();
	}

	@GetMapping("/{id}")
	public PaymentReceiver getUserById(@PathVariable(value = "id") long userid) {
//		 this.userRepository.findById(userid)
//				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));

		return this.paymentRepositoryImpl.findUserFullDetails(userid);
	}

	@GetMapping("/{id}/verifyemail")
	public String sendVerificationMail(@PathVariable(value = "id") long userid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", userid));
		User crruser = (User) cr.uniqueResult();
		String emailtext="Please click below link to verify your email.   "
				+ "emoneytag.com/verifyemail?click="+crruser.getRefcode().replace("[", "");
		sendEmail(crruser.getEmail(), "Email Verification For EmoneyTag", emailtext);
		return "success";
	}
	
	@PostMapping("/{id}/verifyemail")
	public String verifyEmail(@PathVariable(value = "id") String refid) {
		try {
			Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
			cr2.add(Restrictions.eq("refcode", "["+refid));
			User crruser = (User) cr2.uniqueResult();
			if(crruser.getStatus().equals("notverified")) {
				crruser.setStatus("verified");
				this.userRepository.save(crruser);
				return "success";
			}else {
				return "already verified";
			}
		} catch (Exception e) {
			return "failed";
		}
	}

//	@PostMapping("/{id}")
//	public String uploadProfile(@PathVariable(value = "id") long userid,
//			@RequestPart("thumbnail") MultipartFile photoData) {
//		System.out.println("aaaaaaaaaaaaaaaaaa");
////		 String webappRoot = servletContext.getRealPath("/");
////		String temporaryDir = System.getProperty("java.io.tmpdir");
////		String fileName = userid+".jpg";
////		System.out.println(temporaryDir+fileName);
////		File destination = new File(webappRoot + "/resources/profile-pictures/ProfileImage"+userid+".jpg"); // something like C:/Users/tom/Documents/nameBasedOnSomeId.png
////		 BufferedImage src = ImageIO.read(new ByteArrayInputStream(photoData.getBytes()));
////		 
////		ImageIO.write(src, "png", destination);
//		return "";
//	}

	@PostMapping
	public String createUser(@RequestBody ObjectNode node) {
		try {
			User user = new User();
			if (node.get("email") != null) {
				user.setEmail(node.get("email").asText());
			}
			if (node.get("referal") != null) {

				String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
				Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);
				cr.add(Restrictions.eq("pointSource", "Referal"));
				Points points = (Points) cr.uniqueResult();
				
				String refid=node.get("referal").asText();
				Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
				cr2.add(Restrictions.eq("refcode", "["+refid));
				User refuser = (User) cr2.uniqueResult();
				
				UserPoints userPoints = new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource("Referal");
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(refuser);
				this.userPointsRepository.save(userPoints);
			}
			user.setStatus("notverified");
			user.setLevel("Beginner");
			ExampleMatcher modelMatcher = ExampleMatcher.matching().withIgnorePaths("id");
			Example<User> userexample = Example.of(user, modelMatcher);
			if (userRepository.exists(userexample)) {
				return "Already exist";
			} else {

				RandomString gen = new RandomString(8, ThreadLocalRandom.current());
				user.setRefcode(gen.getBuf().toString());
				this.userRepository.save(user);
				Login login = new Login();
				if (node.get("key") != null) {
//					String pw= bCryptPasswordEncoder.encode(node.get("key").asText());
					login.setKey(node.get("key").asText());
				}
				login.setIsloggedin(false);
				login.setUser(user);
				this.loginRepository.save(login);
				PaymentReceiver pReceiver = new PaymentReceiver();
				pReceiver.setUser(user);
				this.paymentRepository.save(pReceiver);
				return "Success";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "Server error. Try again later";
		}

	}
	
	@PostMapping("/google")
	public Login googleUser(@RequestBody ObjectNode node) {
		try {
			if (node.get("referal") != null) {

				String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
				Criteria cr = em.unwrap(Session.class).createCriteria(Points.class);
				cr.add(Restrictions.eq("pointSource", "Referal"));
				Points points = (Points) cr.uniqueResult();
				
				String refid=node.get("referal").asText();
				Criteria cr2 = em.unwrap(Session.class).createCriteria(User.class);
				cr2.add(Restrictions.eq("refcode", refid));
				User refuser = (User) cr2.uniqueResult();
				
				UserPoints userPoints = new UserPoints();
				userPoints.setPoints(points.getPoints());
				userPoints.setPointSource("Referal");
				userPoints.setDate(crrdate);
				userPoints.setStatus("Active");
				userPoints.setUser(refuser);
				this.userPointsRepository.save(userPoints);
			}
			Criteria cruser = em.unwrap(Session.class).createCriteria(User.class);
			cruser.add(Restrictions.eq("email", node.get("email").asText()));
			User getuser=(User) cruser.uniqueResult();
			
			Criteria crlogin = em.unwrap(Session.class).createCriteria(Login.class);
			crlogin.add(Restrictions.eq("key", node.get("key").asText()));
			crlogin.add(Restrictions.eq("user", getuser));
			
			if (!(crlogin.list().isEmpty())) {
				Login loggeduser=(Login) crlogin.uniqueResult();
				return loggeduser;
			} else {
				User user = new User();
				if (node.get("email") != null) {
					user.setEmail(node.get("email").asText());
				}
				RandomString gen = new RandomString(8, ThreadLocalRandom.current());
				user.setStatus("notverified");
				user.setLevel("Beginner");
				user.setRefcode(gen.getBuf().toString());
				this.userRepository.save(user);
				Login login = new Login();
				if (node.get("key") != null) {
//					String pw= bCryptPasswordEncoder.encode(node.get("key").asText());
					login.setKey(node.get("key").asText());
				}
				login.setIsloggedin(false);
				login.setUser(user);
				this.loginRepository.save(login);
				PaymentReceiver pReceiver = new PaymentReceiver();
				pReceiver.setUser(user);
				this.paymentRepository.save(pReceiver);
				return login;
			}
		} catch (Exception e) {
			e.printStackTrace();
			Login login = new Login();
			return login;
		}

	}
	
	@PostMapping("/uploadprimage/{id}")
	public String uploadFile(@PathVariable(value = "id") long userid, 
			@RequestParam("primage") MultipartFile primage) {
		String message1 = "";
		String message2 = "";
		User existingUser = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		boolean errorfound = false;
		try {
			storageService.saveProfile(primage, userid);

			message1 = "Uploaded the file successfully: " + primage.getOriginalFilename();
			System.out.println("*********************** " + message1);
		} catch (Exception e) {
			errorfound = true;
			message1 = "Could not upload the file: " + primage.getOriginalFilename() + "!";
			System.out.println("*********************** " + e.getMessage());
			if(e.getMessage().contains("primages\\")) {
				errorfound=false;
			}
		}
		if (errorfound) {
			return "Failed to upload profile image";
		} else {
			existingUser.setImg("primages/" + userid + "/" + primage.getOriginalFilename());
			this.userRepository.save(existingUser);
			return "primages/" + userid + "/" + primage.getOriginalFilename();
		}
		
	}

	@PutMapping("/{id}")
	public User updateUser(@RequestBody ObjectNode node, @PathVariable(value = "id") long userid) {
		User existingUser = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		if (node.get("fname") != null) {
			existingUser.setFname(node.get("fname").asText());
		}
		if (node.get("lname") != null) {
			existingUser.setLname(node.get("lname").asText());
		}
		if (node.get("email") != null) {
			existingUser.setEmail(node.get("email").asText());
		}
		if (node.get("img") != null) {
			existingUser.setImg(node.get("img").asText());
		}
		if (node.get("mobile") != null) {
			existingUser.setMobile(node.get("mobile").asInt());
		}
		if (node.get("location") != null) {
			existingUser.setLocation(node.get("location").asText());
		}
		if (node.get("country") != null) {
			existingUser.setCountry(node.get("country").asText());
		}
		if (node.get("gender") != null) {
			existingUser.setGender(node.get("gender").asText());
		}
		if (node.get("dob") != null) {
			existingUser.setDob(node.get("dob").asText());
		}
		if (node.get("specialization") != null) {
			existingUser.setSpecialization(node.get("specialization").asText());
		}
		if (node.get("education") != null) {
			existingUser.setEducation(node.get("education").asText());
		}
		if (node.get("key") != null) {
			List<Login> logins = loginRepository.findAll();
			for (Login login : logins) {
				if (login.getUser().equals(existingUser)) {

					login.setKey(node.get("key").asText());
					login.setUser(existingUser);
					this.loginRepository.save(login);
					break;
				}
			}
		}
		if (node.get("p_fname") != null || node.get("p_lname") != null || node.get("p_street") != null
				|| node.get("p_city") != null || node.get("p_region") != null || node.get("p_postal") != null) {
			List<PaymentReceiver> paymentReceivers = paymentRepository.findAll();
			for (PaymentReceiver paymentReceiver : paymentReceivers) {
				if (paymentReceiver.getUser().equals(existingUser)) {

					if (node.get("p_fname") != null) {
						paymentReceiver.setFname(node.get("p_fname").asText());
					}
					if (node.get("p_lname") != null) {
						paymentReceiver.setLname(node.get("p_lname").asText());
					}
					if (node.get("p_street") != null) {
						paymentReceiver.setStreet(node.get("p_street").asText());
					}
					if (node.get("p_city") != null) {
						paymentReceiver.setCity(node.get("p_city").asText());
					}
					if (node.get("p_region") != null) {
						paymentReceiver.setRegion(node.get("p_region").asText());
					}
					if (node.get("p_postal") != null) {
						paymentReceiver.setPostal(node.get("p_postal").asText());
					}
					if (node.get("p_number") != null) {
						paymentReceiver.setAddresno(node.get("p_number").asText());
					}
					if (node.get("p_country") != null) {
						paymentReceiver.setCountry(node.get("p_country").asText());
					}
					if (node.get("p_currency") != null) {
						paymentReceiver.setCurrency(node.get("p_currency").asText());
					}
					this.paymentRepository.save(paymentReceiver);
					break;
				}
			}

		}

		return this.userRepository.save(existingUser);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable(value = "id") long userid) {
		User existingUser = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		this.userRepository.delete(existingUser);
		return ResponseEntity.ok().build();
	}
	
	
	void sendEmail(String to,String subject,String text) {

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setFrom("noreply@emoneytag.com");
		msg.setTo(to);
		msg.setSubject(subject);
		msg.setText(text);

		javaMailSender.send(msg);

	}

	void sendMessageWithAttachment(String to, String subject, String text, String pathToAttachment) {
		// ...

		try {
			MimeMessage message = javaMailSender.createMimeMessage();

			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setFrom("noreply@emoneytag.com");
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(text);

			FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
			helper.addAttachment("Invoice", file);

			javaMailSender.send(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// ...
	}
}
