package satasme.promo.web.repository;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import satasme.promo.web.entity.SocialEngagementResponse;
import satasme.promo.web.entity.UserSocialEngagement;
import satasme.promo.web.entity.VideoUpload;

@Repository
public interface UserSocialEngagementRepository extends JpaRepository<UserSocialEngagement, Long>{
	
}
