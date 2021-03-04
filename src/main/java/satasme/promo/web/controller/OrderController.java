package satasme.promo.web.controller;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.Packages;
import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.User;
import satasme.promo.web.repository.OrdersRepository;
import satasme.promo.web.repository.OrdersRepositoryCustom;
import satasme.promo.web.repository.OrdersRepositoryImpl;
import satasme.promo.web.repository.PackageMinMaxRepository;
import satasme.promo.web.repository.PackageRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/getoprice")
public class OrderController {

	@Autowired
	private PackageRepository packageRepository;
	@Autowired
	private PackageMinMaxRepository packageMinMaxRepository;
	@Autowired
	private OrdersRepository ordersRepository;
	@Autowired
	private OrdersRepositoryCustom ordersRepositoryCustom;
	@Autowired
	private OrdersRepositoryImpl ordersRepositoryImpl;
	@Autowired
	private UserRepository userRepository;
	@PersistenceContext
	protected EntityManager em;

	@GetMapping
	public List<PackageMinMax> getsocialminmax() {
		return packageMinMaxRepository.findAll();
	}
	
	@GetMapping("/allorders/{id}")
	public List<Orders> getallmyorders(@PathVariable(value = "id") long userid) {
		return ordersRepositoryCustom.findOrdersById(userid);
//		return ordersRepository.findAll();
	}
	
	@GetMapping("/allorders")
	public List<Orders> getallorders() {
		return ordersRepository.findAll();
	}
	
	@GetMapping("/confirm/{oid}")
	public List<Orders> confirmorders(@PathVariable(value = "oid") String orderid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(Orders.class);
		cr.add(Restrictions.eq("id", orderid));
		Orders order = (Orders) cr.uniqueResult();
		order.setStatus("confirmed");
		this.ordersRepository.save(order);
		return ordersRepository.findAll();
	}
	
	@GetMapping("/stop/{oid}")
	public List<Orders> stoporders(@PathVariable(value = "oid") String orderid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(Orders.class);
		cr.add(Restrictions.eq("id", orderid));
		Orders order = (Orders) cr.uniqueResult();
		order.setStatus("blocked");
		this.ordersRepository.save(order);
		return ordersRepository.findAll();
	}
	
	@GetMapping("/end/{oid}")
	public List<Orders> endorders(@PathVariable(value = "oid") String orderid) {
		Criteria cr = em.unwrap(Session.class).createCriteria(Orders.class);
		cr.add(Restrictions.eq("id", orderid));
		Orders order = (Orders) cr.uniqueResult();
		order.setStatus("completed");
		this.ordersRepository.save(order);
		return ordersRepository.findAll();
	}

	@GetMapping("/{social}")
	public String getsocialprice(@PathVariable(value = "social") String social,
			@RequestParam("service") String[] service, @RequestParam("count") String[] count,@RequestParam("user") long userid) {

		String responseText = "";
		if (service.length != count.length) {
			responseText = "Something went wrong";
		} else {
			Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
			cr.add(Restrictions.eq("id", Long.valueOf(userid)));
			User user = (User) cr.uniqueResult();
			Criteria cr3 = em.unwrap(Session.class).createCriteria(PaymentReceiver.class);
			cr3.add(Restrictions.eq("user", user));
			PaymentReceiver paReceiver = (PaymentReceiver) cr3.uniqueResult();
			boolean entered = false;
			double total_price = 0;
			for (int i = 0; i < service.length; i++) {
				Criteria crpk = em.unwrap(Session.class).createCriteria(PackageMinMax.class);
				crpk.add(Restrictions.eq("service", service[i]));
				crpk.add(Restrictions.eq("social_name", social));
				PackageMinMax packageMinMax = (PackageMinMax) crpk.uniqueResult();
				Criteria cr2 = em.unwrap(Session.class).createCriteria(Packages.class);
				cr2.add(Restrictions.eq("packageMinMax", packageMinMax));
				cr2.add(Restrictions.eq("country", paReceiver.getCountry()));

				List<Packages> packages = cr2.list();
				int finalcount = 0;
				double price = 0;
				for (Packages pack : packages) {
					if (pack.getCount() >= Integer.parseInt(count[i])) {
						if (finalcount == 0) {
							finalcount = pack.getCount();
							price = pack.getPrice();
						} else if (finalcount >= pack.getCount()) {
							finalcount = pack.getCount();
							price = pack.getPrice();
						}

					}
				}
				if (price == 0) {
					entered = true;
					responseText = "Contact us for get this price";
				}
				total_price += price;
			}
			if (!entered) {
				responseText = "$ " + String.valueOf(total_price);
			}

		}
		return responseText;
	}

//	@GetMapping("/{id}")
//	public PaymentReceiver getUserById(@PathVariable(value = "id") long userid) {
//		 return this.paymentRepositoryImpl.findUserFullDetails(userid);
//	}

	@PostMapping
	public String saveOrder(@RequestBody ObjectNode node) {
		String social_name = node.get("social").asText();
		String social_link = node.get("link").asText();

//		if (social_name.equals("youtube")) {
		String userid = node.get("user").asText();
		String country = node.get("country").asText();
//		String country="";
//		for (JsonNode jsonNode : countrynode) {
//			
//			country+=jsonNode.toString().replace('"', ' ').replace(" ", "")+",";
//		}
		String agegroup = node.get("agegroup").asText();
		String gender = node.get("gender").asText();
		String service = node.get("service").asText();
		String count = node.get("count").asText();
		double cost = node.get("cost").asDouble();
//			if (service.contains(",")) {
//				String service1 = service.split(",")[0];
//				String service2 = service.split(",")[1];
//				System.out.println(service1);
//				System.out.println(service2);
//			}else {
//				
//			}
		Criteria cr = em.unwrap(Session.class).createCriteria(User.class);
		cr.add(Restrictions.eq("id", Long.valueOf(userid)));
		User user = (User) cr.uniqueResult();
		Orders orders = new Orders();
		orders.setId(UUID.randomUUID().toString());
		orders.setSocial(social_name);
		orders.setSocial_link(social_link);
		orders.setService(service);
		orders.setCost(cost);
		orders.setQty(count);
		orders.setCountry(country);
		orders.setAgegroup(agegroup);
		orders.setGender(gender);
		orders.setUser(user);
		orders.setDate(new Date());
		orders.setPay_method("paypal");
		orders.setStatus("pending release");
		this.ordersRepository.save(orders);

//		}

		return "success";
	}

}
