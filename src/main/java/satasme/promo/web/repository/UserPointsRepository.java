package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.UserPoints;


public interface UserPointsRepository extends JpaRepository<UserPoints, Long>{

}
