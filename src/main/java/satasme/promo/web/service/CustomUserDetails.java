package satasme.promo.web.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.User;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.PaymentReceiverRepository;
import satasme.promo.web.repository.UserRepository;

//public class CustomUserDetails implements PaymentReceiverRepository {

	

	

//	private User user;
//	
//	public void setUser(User user) {
//		this.user = user;
//	}
//	
//	public User getUser() {
//		return user;
//	}
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String getPassword() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return user.getEmail();
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return false;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		String str_status=user.getStatus();
//		boolean status=false;
//		if(str_status.equals("Active")){
//			status=true;
//		}
//		return status;
//	}

//}
