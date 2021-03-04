package satasme.promo.web.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import satasme.promo.web.entity.PaymentReceiver;
import satasme.promo.web.entity.User;
import satasme.promo.web.exceptions.ResourceNotFoundException;

public class PaymentReceiverRepositoryImpl implements PaymentReceiverRepositoryCustom{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private PaymentReceiverRepository profileRepository;
	@Override
	
	public PaymentReceiver findUserFullDetails(long userid) {
		User user = this.userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id:" + userid));
		PaymentReceiver prReceiver = null;
		List<PaymentReceiver> paymentReceivers = profileRepository.findAll();
		for (PaymentReceiver paymentReceiver : paymentReceivers) {
			if (paymentReceiver.getUser().equals(user)) {
				prReceiver = paymentReceiver;
				break;
			}
		}
		return prReceiver;
		
	}

}
