package satasme.promo.web.repository;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.User;
import satasme.promo.web.entity.VideoUpload;

public class UploadVideoRepositoryImpl implements UploadVideoRepositoryCustom{

	@Autowired
	private UploadVideoRepository uploadVideoRepository;
	@PersistenceContext
	protected EntityManager em;
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public List<VideoUpload> finduploadsById(long userid) {
		Criteria crpk = em.unwrap(Session.class).createCriteria(VideoUpload.class);
		Optional<User> crruser = userRepository.findById(userid);
		crpk.add(Restrictions.eq("user", crruser.get()));
		return crpk.list();
	}

}
