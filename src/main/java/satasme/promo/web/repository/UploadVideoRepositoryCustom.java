package satasme.promo.web.repository;

import java.util.List;

import satasme.promo.web.entity.VideoUpload;

public interface UploadVideoRepositoryCustom {
	public List<VideoUpload> finduploadsById(long userid);
}
