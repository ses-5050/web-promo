package satasme.promo.web.controller;

import java.text.SimpleDateFormat;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/login")
public class LoginController {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping
	public String login(@RequestBody ObjectNode node) {
		String responseText="";
		String email="";
		boolean errorfound=false;
		if(node.get("email")!=null) {
			email=node.get("email").asText();
		}else {
			errorfound=true;
			responseText="failed";
		}
		String key="";
		if(node.get("key")!=null) {
			key=node.get("key").asText();
		}else {
			errorfound=true;
			responseText="failed";
		}
		if (!errorfound) {
			boolean emailfound=false;
			boolean pwfound=false;
			User getuser=null;
			List<User> users=userRepository.findAll();
			for (User user : users) {
				if (user.getEmail().equals(email)) {
					emailfound=true;
					getuser=user;
					break;
				}
			}
			if (emailfound) {
				String uid="";
				String uname="";
				List<Login> logins=loginRepository.findAll();
				for (Login login : logins) {
					if (login.getUser().equals(getuser)) {
						
						if(login.getKey().equals(key)) {
							pwfound=true;

							login.setIsloggedin(true);
							String crrdate= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
							login.setLastlogin(crrdate);
							uid=String.valueOf(login.getUser().getId());
							uname=login.getUser().getFname();
							this.loginRepository.save(login);
						}
						break;
					}
				}
				if (pwfound) {
					responseText=uid;
				}else {
					responseText="failed";
				}
				
			}else {
				responseText="failed";
			}
//			Login login=new Login();
//			User user=new User();
//			user.setEmail(email);
//			login.setKey(key);
//			login.setUser(user);
//			System.out.println("#####################"+email);
//			User user1= userRepository.findByEmail(email);
//			System.out.println(user1.getFname()+"**********************");
//			ExampleMatcher modelMatcher = ExampleMatcher.matching().withIgnorePaths("id_login").withIgnorePaths("is_loggedin").withIgnorePaths("last_login");
//			Example<Login> example = Example.of(login, modelMatcher);
//			if (loginRepository.exists(example)) {
//				responseText="found";
//			}else {
//				responseText="not found";
//			}
		}
		
		return responseText;
	}
}
