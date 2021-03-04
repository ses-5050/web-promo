package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.PackageMinMax;
import satasme.promo.web.entity.Packages;

public interface PackageMinMaxRepository extends JpaRepository<PackageMinMax, Long> {

}
