package satasme.promo.web.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FilesStorageServiceImpl implements FilesStorageService {

	private final Path root = Paths.get("uploads");

	@Override
	public void init() {
		try {
			if (!Files.exists(root)) {
				Files.createDirectory(root);
			}
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize folder for upload!");
		}
	}

	@Override
	public void save(MultipartFile file,long userid,String uploadid) {
		try {
			Path userroot=Paths.get("uploads/"+userid);
			if (!Files.exists(userroot)) {
				Files.createDirectory(userroot);
				userroot=Paths.get("uploads/"+userid+"/"+uploadid);
				if (!Files.exists(userroot)) {
					Files.createDirectory(userroot);
				}
			}else {
				userroot=Paths.get("uploads/"+userid+"/"+uploadid);
				if (!Files.exists(userroot)) {
					Files.createDirectory(userroot);
				}
			}
			Files.copy(file.getInputStream(), userroot.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		}
	}

	@Override
	public Resource load(String filename,String userid,String uploadid) {
		try {
			Path userroot=Paths.get("uploads/"+userid+"/"+uploadid+"/"+filename);
			System.out.println("@@@@@@@@@@@@@@@@   "+userroot);
			Path file = root.resolve(filename);
			Resource resource = new UrlResource(file.toUri());

			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("Could not read the file!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("Error: " + e.getMessage());
		}
	}

	@Override
	public void deleteAll() {
		FileSystemUtils.deleteRecursively(root.toFile());
	}

	@Override
	public Stream<Path> loadAll() {
		try {
			return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
		} catch (IOException e) {
			throw new RuntimeException("Could not load the files!");
		}
	}

	@Override
	public void saveProfile(MultipartFile file, long userid) {
		try {
			if (!Files.exists(Paths.get("primages"))) {
				Files.createDirectory(Paths.get("primages"));
			}
			Path userroot=Paths.get("primages/"+userid);
			if (!Files.exists(userroot)) {
				Files.createDirectory(userroot);
			}
			Files.copy(file.getInputStream(), userroot.resolve(file.getOriginalFilename()));
		} catch (Exception e) {
			throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		}
	}
	
	@Override
	public Resource loadProfile(String filename,String userid) {
		try {
			Path userroot=Paths.get("primages/"+userid+"/"+filename);
			Path file = root.resolve(filename);
			Resource resource = new UrlResource(file.toUri());

			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("Could not read the file!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("Error: " + e.getMessage());
		}
	}
}
