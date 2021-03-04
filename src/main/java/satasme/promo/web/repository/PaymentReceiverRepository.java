package satasme.promo.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import satasme.promo.web.entity.PaymentReceiver;

@Repository
public interface PaymentReceiverRepository extends JpaRepository<PaymentReceiver, Long>{

	
}
