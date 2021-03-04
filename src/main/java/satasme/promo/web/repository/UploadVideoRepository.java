package satasme.promo.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.VideoUpload;

public interface UploadVideoRepository extends JpaRepository<VideoUpload, Long>{
	
}
