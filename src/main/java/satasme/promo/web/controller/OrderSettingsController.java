package satasme.promo.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.Packages;
import satasme.promo.web.entity.User;
import satasme.promo.web.exceptions.ResourceNotFoundException;
import satasme.promo.web.repository.LoginRepository;
import satasme.promo.web.repository.PackageMinMaxRepository;
import satasme.promo.web.repository.PackageRepository;
import satasme.promo.web.repository.UserRepository;

@RestController
@RequestMapping("/api/ordersettings")
public class OrderSettingsController {

	@Autowired
	private PackageRepository packageRepository;
	@Autowired
	private PackageMinMaxRepository packageMinMaxRepository;
	@PersistenceContext
	protected EntityManager em;

	@GetMapping("/{socialname}/{service}")
	public List<Packages> getPackages(@PathVariable(value = "socialname") String socialname,
			@PathVariable(value = "service") String service) {
		Criteria crpk = em.unwrap(Session.class).createCriteria(PackageMinMax.class);
		crpk.add(Restrictions.eq("social_name", socialname));
		crpk.add(Restrictions.eq("service", service));
		if (crpk.list().isEmpty()) {
			return null;
		} else {
			PackageMinMax pack = (PackageMinMax) crpk.uniqueResult();
			Criteria cr = em.unwrap(Session.class).createCriteria(Packages.class);
			cr.add(Restrictions.eq("packageMinMax", pack));
			List<Packages> p_list = cr.list();

			return p_list;
		}
	}
	
	@GetMapping("minmax/{socialname}/{service}")
	public PackageMinMax getMinMax(@PathVariable(value = "socialname") String socialname,
			@PathVariable(value = "service") String service) {
		PackageMinMax pMinMax=null;
		Criteria crpk = em.unwrap(Session.class).createCriteria(PackageMinMax.class);
		crpk.add(Restrictions.eq("social_name", socialname));
		crpk.add(Restrictions.eq("service", service));
		if (!crpk.list().isEmpty()) {
			pMinMax= (PackageMinMax) crpk.uniqueResult();
		}
		return pMinMax;
	}

	@PostMapping
	public String saveSettings(@RequestBody ObjectNode node) {
		String responseText = "Something went wrong";
		String social_name = node.get("social_name").asText();
		String service = node.get("service").asText();
		int min = 0;
		if (node.get("min") != null) {
			min = node.get("min").asInt();
		}
		int max = 0;
		if (node.get("max") != null) {
			max = node.get("max").asInt();
		}

		Criteria cr = em.unwrap(Session.class).createCriteria(PackageMinMax.class);
		cr.add(Restrictions.eq("social_name", social_name));
		cr.add(Restrictions.eq("service", service));

		if (cr.list().isEmpty()) {
			if (min == 0 || max == 0) {
				responseText = "Min value or max value is empty";
			} else {
				PackageMinMax packageMinMax = new PackageMinMax();
				packageMinMax.setSocial_name(social_name);
				packageMinMax.setService(service);
				packageMinMax.setMin(min);
				packageMinMax.setMax(max);
				this.packageMinMaxRepository.save(packageMinMax);
				responseText = "Success";
			}
		} else {
			if (min == 0 || max == 0) {
				responseText = "Min value or max value is empty";
			} else {
				PackageMinMax pmMinMax = (PackageMinMax) cr.uniqueResult();
				pmMinMax.setMin(min);
				pmMinMax.setMax(max);
				this.packageMinMaxRepository.save(pmMinMax);
				responseText = "Success";
			}
		}

		if (responseText.equals("Success")) {
			
			if (node.get("count") != null && node.get("social_name") != null) {
				Criteria cr3 = em.unwrap(Session.class).createCriteria(PackageMinMax.class);
				cr3.add(Restrictions.eq("social_name", social_name));
				cr3.add(Restrictions.eq("service", service));
				PackageMinMax pmMinMax = (PackageMinMax) cr3.uniqueResult();
				int count = node.get("count").asInt();
				double price = node.get("price").asDouble();
				String country = node.get("country").asText();
				
				Criteria cr4 = em.unwrap(Session.class).createCriteria(Packages.class);
				cr4.add(Restrictions.eq("count", count));
				cr4.add(Restrictions.eq("packageMinMax", pmMinMax));
				
				if (cr4.list().isEmpty()) {
					Packages packages=new Packages();
					packages.setCount(count);
					packages.setPrice(price);
					packages.setCountry(country);
					packages.setPackageMinMax(pmMinMax);
					this.packageRepository.save(packages);
				}else {
					Packages packages=(Packages) cr4.uniqueResult();
					packages.setCount(count);
					packages.setPrice(price);
					packages.setCountry(country);
					packages.setPackageMinMax(pmMinMax);
					this.packageRepository.save(packages);
				}
				
				
				responseText="Successfully Added";
			}

		}

		return responseText;
	}
}
