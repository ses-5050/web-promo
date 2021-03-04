package satasme.promo.web.repository;

import java.util.List;

import satasme.promo.web.entity.EarningResponse;
import satasme.promo.web.entity.SocialEngagementResponse;

public interface UserSocialEngagementRepositoryCustom {
	public List<SocialEngagementResponse> findEngagementsById(long userid,String service);
	
}
