package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.AdminLogin;
import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.AdminLoginRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/alogin")
public class AdminLoginController {
	@Autowired
	private AdminLoginRepository adminLoginRepository;

	@PostMapping
	public Object login(@RequestBody ObjectNode node) {
		String responseText="";
		String email="";
		boolean errorfound=false;
		if(node.get("email")!=null) {
			email=node.get("email").asText();
		}else {
			errorfound=true;
			responseText="failed";
		}
		String pw="";
		if(node.get("pw")!=null) {
			pw=node.get("pw").asText();
		}else {
			errorfound=true;
			responseText="failed";
		}
		if (!errorfound) {
			boolean userfound=false;
			boolean pwfound=false;
			AdminLogin getadmin=null;
			List<AdminLogin> admins=adminLoginRepository.findAll();
			for (AdminLogin admin : admins) {
				if (admin.getEmail().equals(email) && admin.getPassword().equals(pw)) {
					userfound=true;
					getadmin=admin;
					break;
				}
			}
			if (userfound) {
				AdminLoginResponse alr=new AdminLoginResponse();
				alr.setAdminid(getadmin.getId());
				alr.setRole(getadmin.getRole());
				return alr;
			}else {
				responseText="failed";
				return responseText;
			}
		}else {
			return responseText;
		}
	}
	
}
