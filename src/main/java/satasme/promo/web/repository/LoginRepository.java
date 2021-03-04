package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.Login;

public interface LoginRepository extends JpaRepository<Login, Long>{

	
}
