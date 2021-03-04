package satasme.promo.web.repository;

import java.util.List;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.UserEarningResponse;

public interface OrdersRepositoryCustom {
	public List<Orders> findOrdersById(long userid);
	public List<Orders> findOrdersByService(String service);
	public List<EarningResponse> findEngagementsSocial(String social);
	public List<UserEarningResponse> findEngagementsUser(String social);
	public String getUserTotal(long userid);
	public String getUserPeriod(long userid,String period);
}
