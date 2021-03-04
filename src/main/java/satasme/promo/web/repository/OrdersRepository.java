package satasme.promo.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import satasme.promo.web.entity.Login;
import satasme.promo.web.entity.Orders;
import satasme.promo.web.entity.PaymentReceiver;

public interface OrdersRepository extends JpaRepository<Orders, String> {
	
}
