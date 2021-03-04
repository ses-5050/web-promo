package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.Packages;

public interface PackageRepository extends JpaRepository<Packages, Long>{

}
