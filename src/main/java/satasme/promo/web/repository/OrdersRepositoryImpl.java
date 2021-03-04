package satasme.promo.web.repository;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.Order;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.UserEarningResponse;
import satasme.promo.web.entity.UserPoints;
import satasme.promo.web.entity.UserSocialEngagement;

public class OrdersRepositoryImpl implements OrdersRepositoryCustom {

	@Autowired
	private OrdersRepository ordersRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<Orders> findOrdersById(long userid) {
		Criteria crpk = em.unwrap(Session.class).createCriteria(Orders.class);
		Optional<User> crruser = userRepository.findById(userid);
		crpk.add(Restrictions.eq("user", crruser.get()));
		return crpk.list();
	}

	@Override
	public List<Orders> findOrdersByService(String serviceget) {
		Criteria crpk = em.unwrap(Session.class).createCriteria(Orders.class);
		String social = "";
		String service = "";
		if (serviceget.equals("Facebook Page Like")) {
			social = "facebook";
			service = "page likes";
		} else if (serviceget.equals("Facebook Post Like")) {
			social = "facebook";
			service = "post likes";
		} else if (serviceget.equals("Facebook Post Share")) {
			social = "facebook";
			service = "shares";
		} else if (serviceget.equals("Youtube Subscribe")) {
			social = "youtube";
			service = "subscribers";
		} else if (serviceget.equals("Youtube Video Watch")) {
			social = "youtube";
			service = "views";
		} else if (serviceget.equals("Instagram Followers")) {
			social = "instagram";
			service = "followers";
		} else if (serviceget.equals("Twitter Followers")) {
			social = "twitter";
			service = "followers";
		} else if (serviceget.equals("Tiktok Followers")) {
			social = "tiktok";
			service = "followers";
		}
		crpk.add(Restrictions.eq("social", social));
		crpk.add(Restrictions.like("service", service, MatchMode.ANYWHERE));
		return crpk.list();
	}

	@Override
	public List<EarningResponse> findEngagementsSocial(String social) {

		List<EarningResponse> erlist = new ArrayList<>();
		Criteria crpk = em.unwrap(Session.class).createCriteria(Orders.class);
		crpk.add(Restrictions.eq("social", social));
		if (!crpk.list().isEmpty()) {
			List<Orders> olist = crpk.list();
			for (Orders orders : olist) {

				Criteria cr = em.unwrap(Session.class).createCriteria(UserSocialEngagement.class);
				String service = "";
				if (orders.getService().contains(",")) {
					System.out.println(orders.getSocial_link());
					System.out.println(orders.getService());
					if (social.equals("facebook") && orders.getService().equals("post likes,page likes,shares")) {
						String[] ar1 = { "Facebook Page Like", "Facebook Post Like", "Facebook Post Share" };
						for (int i = 0; i < ar1.length; i++) {
							cr.add(Restrictions.eq("service", ar1[i]));
							cr.add(Restrictions.eq("orders", orders));
							List<UserSocialEngagement> uelist = cr.list();
							int ototal = 0;
							for (UserSocialEngagement ue : uelist) {
								ototal++;
							}
							EarningResponse er = new EarningResponse();

							er.setUrl(orders.getSocial_link());
							er.setCount("" + ototal);
							er.setService(ar1[i]);
							erlist.add(er);
						}
					} else if (social.equals("facebook") && orders.getService().equals("post likes,page likes")) {
						String[] ar1 = { "Facebook Page Like", "Facebook Post Like" };
						for (int i = 0; i < ar1.length; i++) {
							cr.add(Restrictions.eq("service", ar1[i]));
							cr.add(Restrictions.eq("orders", orders));
							List<UserSocialEngagement> uelist = cr.list();
							int ototal = 0;
							for (UserSocialEngagement ue : uelist) {
								ototal++;
							}
							EarningResponse er = new EarningResponse();

							er.setUrl(orders.getSocial_link());
							er.setCount("" + ototal);
							er.setService(ar1[i]);
							erlist.add(er);
						}
					} else if (social.equals("facebook") && orders.getService().equals("post likes,shares")) {
						String[] ar1 = { "Facebook Post Like", "Facebook Post Share" };
						for (int i = 0; i < ar1.length; i++) {
							cr.add(Restrictions.eq("service", ar1[i]));
							cr.add(Restrictions.eq("orders", orders));
							List<UserSocialEngagement> uelist = cr.list();
							int ototal = 0;
							for (UserSocialEngagement ue : uelist) {
								ototal++;
							}
							EarningResponse er = new EarningResponse();

							er.setUrl(orders.getSocial_link());
							er.setCount("" + ototal);
							er.setService(ar1[i]);
							erlist.add(er);
						}
					} else if (social.equals("facebook") && orders.getService().equals("page likes,shares")) {
						String[] ar1 = { "Facebook Page Like", "Facebook Post Share" };
						for (int i = 0; i < ar1.length; i++) {
							cr.add(Restrictions.eq("service", ar1[i]));
							cr.add(Restrictions.eq("orders", orders));
							List<UserSocialEngagement> uelist = cr.list();
							int ototal = 0;
							for (UserSocialEngagement ue : uelist) {
								ototal++;
							}
							EarningResponse er = new EarningResponse();

							er.setUrl(orders.getSocial_link());
							er.setCount("" + ototal);
							er.setService(ar1[i]);
							erlist.add(er);
						}
					} else if (social.equals("youtube") && orders.getService().equals("views,subscribers")) {
						String[] ar1 = { "Youtube Subscribe", "Youtube Video Watch" };
						for (int i = 0; i < ar1.length; i++) {
							cr.add(Restrictions.eq("service", ar1[i]));
							cr.add(Restrictions.eq("orders", orders));
							List<UserSocialEngagement> uelist = cr.list();
							int ototal = 0;
							for (UserSocialEngagement ue : uelist) {
								ototal++;
							}
							EarningResponse er = new EarningResponse();

							er.setUrl(orders.getSocial_link());
							er.setCount("" + ototal);
							er.setService(ar1[i]);
							erlist.add(er);
						}
					}
				} else {

					if (social.equals("facebook") && orders.getService().equals("page likes")) {
						service = "Facebook Page Like";
					} else if (social.equals("facebook") && orders.getService().equals("post likes")) {
						service = "Facebook Post Like";
					} else if (social.equals("facebook") && orders.getService().equals("shares")) {
						service = "Facebook Post Share";
					} else if (social.equals("youtube") && orders.getService().equals("subscribers")) {
						service = "Youtube Subscribe";
					} else if (social.equals("youtube") && orders.getService().equals("views")) {
						service = "Youtube Video Watch";
					} else if (social.equals("instagram") && orders.getService().equals("followers")) {
						service = "Instagram Followers";
					} else if (social.equals("twitter") && orders.getService().equals("followers")) {
						service = "Twitter Followers";
					} else if (social.equals("tiktok") && orders.getService().equals("followers")) {
						service = "Tiktok Followers";
					}
					cr.add(Restrictions.eq("service", service));
					cr.add(Restrictions.eq("orders", orders));
					List<UserSocialEngagement> uelist = cr.list();
					int ototal = 0;
					for (UserSocialEngagement ue : uelist) {
						ototal++;
					}
					EarningResponse er = new EarningResponse();

					er.setUrl(orders.getSocial_link());
					er.setCount("" + ototal);
					er.setService(service);
					erlist.add(er);
				}

			}
			return erlist;
		} else {
			EarningResponse er = new EarningResponse();
			er.setCount("0");
			er.setUrl("");
			er.setService("");
			return erlist;
		}
	}

	@Override
	public List<UserEarningResponse> findEngagementsUser(String social) {

		List<UserEarningResponse> erlist = new ArrayList<>();
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		List<User> u_list = cr.list();
		for (User user : u_list) {
			Criteria crup = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crup.add(Restrictions.eq("user", user));
			if (social.equals("facebook")) {
				String[] ar1 = { "Facebook Page Like", "Facebook Post Like", "Facebook Post Share" };
				double total_points = 0;
				for (int i = 0; i < ar1.length; i++) {
					crup.add(Restrictions.eq("pointSource", ar1[i]));

					if (!crup.list().isEmpty()) {
						List<UserPoints> up_list = crup.list();
						for (UserPoints up : up_list) {
							total_points += up.getPoints();
						}
					}
				}
				if (total_points!=0) {
					UserEarningResponse uer = new UserEarningResponse();
					uer.setEarning(total_points);
					uer.setEmail(user.getEmail());
					uer.setFname(user.getFname());
					uer.setLname(user.getLname());
					erlist.add(uer);
				}
			} else if (social.equals("youtube")) {
				String[] ar1 = { "Youtube Subscribe", "Youtube Video Watch" };
				double total_points = 0;
				for (int i = 0; i < ar1.length; i++) {
					crup.add(Restrictions.eq("pointSource", ar1[i]));

					if (!crup.list().isEmpty()) {
						List<UserPoints> up_list = crup.list();
						for (UserPoints up : up_list) {
							total_points += up.getPoints();
						}
					}
				}
				if (total_points!=0) {
					UserEarningResponse uer = new UserEarningResponse();
					uer.setEarning(total_points);
					uer.setEmail(user.getEmail());
					uer.setFname(user.getFname());
					uer.setLname(user.getLname());
					erlist.add(uer);
				}
			} else if (social.equals("instagram")) {
				String[] ar1 = { "Instagram Followers" };
				double total_points = 0;
				for (int i = 0; i < ar1.length; i++) {
					crup.add(Restrictions.eq("pointSource", ar1[i]));

					if (!crup.list().isEmpty()) {
						List<UserPoints> up_list = crup.list();
						for (UserPoints up : up_list) {
							total_points += up.getPoints();
						}
					}
				}
				if (total_points!=0) {
					UserEarningResponse uer = new UserEarningResponse();
					uer.setEarning(total_points);
					uer.setEmail(user.getEmail());
					uer.setFname(user.getFname());
					uer.setLname(user.getLname());
					erlist.add(uer);
				}
			} else if (social.equals("twitter")) {
				String[] ar1 = { "Twitter Followers" };
				double total_points = 0;
				for (int i = 0; i < ar1.length; i++) {
					crup.add(Restrictions.eq("pointSource", ar1[i]));

					if (!crup.list().isEmpty()) {
						List<UserPoints> up_list = crup.list();
						for (UserPoints up : up_list) {
							total_points += up.getPoints();
						}
					}
				}
				if (total_points!=0) {
					UserEarningResponse uer = new UserEarningResponse();
					uer.setEarning(total_points);
					uer.setEmail(user.getEmail());
					uer.setFname(user.getFname());
					uer.setLname(user.getLname());
					erlist.add(uer);
				}
			} else if (social.equals("tiktok")) {
				String[] ar1 = { "Tiktok Followers" };
				double total_points = 0;
				for (int i = 0; i < ar1.length; i++) {
					crup.add(Restrictions.eq("pointSource", ar1[i]));

					if (!crup.list().isEmpty()) {
						List<UserPoints> up_list = crup.list();
						for (UserPoints up : up_list) {
							total_points += up.getPoints();
						}
					}
				}
				if (total_points!=0) {
					UserEarningResponse uer = new UserEarningResponse();
					uer.setEarning(total_points);
					uer.setEmail(user.getEmail());
					uer.setFname(user.getFname());
					uer.setLname(user.getLname());
					erlist.add(uer);
				}
				
				
			}
		}

		return erlist;
	}

	@Override
	public String getUserTotal(long userid) {
		UserEarningResponse uer=new UserEarningResponse();
		Optional<User> crruser = userRepository.findById(userid);
		Criteria crpk = em.unwrap(Session.class).createCriteria(UserPoints.class);
		crpk.add(Restrictions.eq("user", crruser.get()));
		crpk.add(Restrictions.eq("status", "Active"));
		if (crpk.list().isEmpty()) {
			return "0";
		}else {
			double totalpoints=0;
			List<UserPoints> plist = crpk.list();
			for (UserPoints up : plist) {
				totalpoints+=up.getPoints();
			}
			return ""+totalpoints;
		}
		
	}

	@Override
	public String getUserPeriod(long userid, String period) {
		// TODO Auto-generated method stub
		double totalpoints=0;
		
		Optional<User> crruser = userRepository.findById(userid);
		String crrdate = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
		if (period.equals("today")) {
			Criteria crpk = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crpk.add(Restrictions.eq("user", crruser.get()));
			crpk.add(Restrictions.eq("date", crrdate));
			crpk.add(Restrictions.eq("status", "Active"));
			if (crpk.list().isEmpty()) {
				return "0";
			}else {
				List<UserPoints> plist = crpk.list();
				for (UserPoints up : plist) {
					totalpoints+=up.getPoints();
				}
				return ""+totalpoints;
			}
		}else if (period.equals("yesterday")) {
			LocalDate yesterday = LocalDate.now().minusDays(1);
			Criteria crpk = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crpk.add(Restrictions.eq("user", crruser.get()));
			crpk.add(Restrictions.between("date", String.valueOf(yesterday), crrdate));
			crpk.add(Restrictions.eq("status", "Active"));
			if (crpk.list().isEmpty()) {
				return "0";
			}else {
				List<UserPoints> plist = crpk.list();
				for (UserPoints up : plist) {
					System.out.println(up.getPoints());
					totalpoints+=up.getPoints();
				}
				return ""+totalpoints;
			}
		}else if (period.equals("7day")) {
			LocalDate week = LocalDate.now().minusDays(7);
			Criteria crpk = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crpk.add(Restrictions.eq("user", crruser.get()));
			crpk.add(Restrictions.between("date", String.valueOf(week), crrdate));
			crpk.add(Restrictions.eq("status", "Active"));
			if (crpk.list().isEmpty()) {
				return "0";
			}else {
				List<UserPoints> plist = crpk.list();
				for (UserPoints up : plist) {
					totalpoints+=up.getPoints();
				}
				return ""+totalpoints;
			}
		}else if (period.equals("month")) {
			LocalDate month = LocalDate.now().minusDays(30);
			Criteria crpk = em.unwrap(Session.class).createCriteria(UserPoints.class);
			crpk.add(Restrictions.eq("user", crruser.get()));
			crpk.add(Restrictions.between("date", String.valueOf(month), crrdate));
			crpk.add(Restrictions.eq("status", "Active"));
			if (crpk.list().isEmpty()) {
				return "0";
			}else {
				List<UserPoints> plist = crpk.list();
				for (UserPoints up : plist) {
					totalpoints+=up.getPoints();
				}
				return ""+totalpoints;
			}
		}
		return ""+totalpoints;
	}


}
