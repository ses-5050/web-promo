package satasme.promo.web.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.ImageModel;

public interface PRImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);
}
