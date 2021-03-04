package satasme.promo.web.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserSocialEngagement;

public class UserSocialEngagementRepositoryImpl implements UserSocialEngagementRepositoryCustom{

	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserSocialEngagementRepository userSocialEngagementRepository;
	@Autowired
	private OrdersRepositoryCustom ordersRepositoryCustom;
	

	@Override
	public List<SocialEngagementResponse> findEngagementsById(long userid,String service) {
		Optional<User> user = this.userRepository.findById(userid);
		List<Orders> ordersByService = this.ordersRepositoryCustom.findOrdersByService(service);
		List<UserSocialEngagement> findAllengagements = this.userSocialEngagementRepository.findAll();
		List<SocialEngagementResponse> engagementByUser=new ArrayList();
		
		
		for (Orders orders : ordersByService) {
			boolean found=false;
			SocialEngagementResponse response=new SocialEngagementResponse();
			for (UserSocialEngagement engagement : findAllengagements) {
				if (engagement.getOrders().getId()==orders.getId()) {
					found=true;
					response.setStatus("Liked");
				}
			}
			if (!found) {
				response.setStatus("Like");
			}
			response.setUrl(orders.getSocial_link());
			response.setid(orders.getId());
			engagementByUser.add(response);
		}
		
		return engagementByUser;
	}

}
