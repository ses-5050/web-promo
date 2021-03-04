package satasme.promo.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.UserEarningResponse;
import satasme.promo.web.repository.OrdersRepository;
import satasme.promo.web.repository.OrdersRepositoryImpl;

@RestController
@RequestMapping("/api/earnings")
public class EarnController {

	@Autowired
	private OrdersRepositoryImpl ordersRepositoryImpl;
	
	@GetMapping("/{social}")
	public List<EarningResponse> getEngagementsBySocial(@PathVariable(value = "social") String social) {
		
		return ordersRepositoryImpl.findEngagementsSocial(social);
	}
	
	@GetMapping("/user/{social}")
	public List<UserEarningResponse> getEngagementsByUser(@PathVariable(value = "social") String social) {
		
		return ordersRepositoryImpl.findEngagementsUser(social);
	}
	
	@GetMapping("/{user}/total")
	public String getUserTotal(@PathVariable(value = "user") long userid) {
		
		return ordersRepositoryImpl.getUserTotal(userid);
	}
	
	@GetMapping("/{user}/{per}")
	public String getUserPeriod(@PathVariable(value = "user") long userid,@PathVariable(value = "per") String period) {
		
		return ordersRepositoryImpl.getUserPeriod(userid, period);
	}
}
