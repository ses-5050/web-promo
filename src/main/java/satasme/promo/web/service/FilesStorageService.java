package satasme.promo.web.service;

import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FilesStorageService {
	public void init();

	public void save(MultipartFile file,long userid,String uploadid);
	
	public void saveProfile(MultipartFile file,long userid);

	public Resource load(String filename,String userid,String uploadid);

	public Resource loadProfile(String filename,String userid);

	public void deleteAll();

	public Stream<Path> loadAll();
}
