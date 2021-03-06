package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.UserFeedback;

public interface UserFeedbackRepository extends JpaRepository<UserFeedback, Long>{

}
