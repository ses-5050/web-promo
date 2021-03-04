package satasme.promo.web;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.core.io.FileSystemResource;



//youtube
/**
 * Sample Java code for youtube.videos.insert
 * See instructions for running these code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#java
 */

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.InputStreamContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.Video;

import satasme.promo.web.service.FilesStorageService;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collection;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

@SpringBootApplication
public class WebPromoApplication extends SpringBootServletInitializer implements CommandLineRunner {
	@Resource
	FilesStorageService storageService;
	private static final String CLIENT_SECRETS = "client_secret.json";
	private static final Collection<String> SCOPES = Arrays.asList("https://www.googleapis.com/auth/youtube.upload");

	private static final String APPLICATION_NAME = "API code samples";
	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();

	/**
	 * Create an authorized Credential object.
	 *
	 * @return an authorized Credential object.
	 * @throws IOException
	 */
	public static Credential authorize(final NetHttpTransport httpTransport) throws IOException {
		// Load client secrets.
		InputStream in = WebPromoApplication.class.getResourceAsStream(CLIENT_SECRETS);
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(httpTransport, JSON_FACTORY,
				clientSecrets, SCOPES).build();
		Credential credential = new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
		return credential;
	}

	/**
	 * Build and return an authorized API client service.
	 *
	 * @return an authorized API client service
	 * @throws GeneralSecurityException, IOException
	 */
	public static YouTube getService() throws GeneralSecurityException, IOException {
		final NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
		Credential credential = authorize(httpTransport);
		return new YouTube.Builder(httpTransport, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME)
				.build();
	}

	/**
	 * Call function to create API service object. Define and execute API request.
	 * Print API response.
	 *
	 * @throws GeneralSecurityException, IOException, GoogleJsonResponseException
	 */

	public static void main(String[] args) throws GeneralSecurityException, IOException, GoogleJsonResponseException {
		SpringApplication.run(WebPromoApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		storageService.deleteAll();
//		storageService.init();

		System.out.println("Sending Email...");

		try {

//            sendEmail("dilanka.ofz@gmail.com","test email","attempt success");
			// sendEmailWithAttachment();

		} catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("Done");
	}

	

}
