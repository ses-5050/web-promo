package satasme.promo.web.entity;

public class PayoutResponse {
	String name;
	String email;
	String amount;
	String currency;
	String cus_id;
	String note;
	String wallet;
	
	public PayoutResponse() {
		super();
	}

	public PayoutResponse(String name, String email, String amount, String currency, String cus_id, String note,
			String wallet) {
		super();
		this.name = name;
		this.email = email;
		this.amount = amount;
		this.currency = currency;
		this.cus_id = cus_id;
		this.note = note;
		this.wallet = wallet;
	}



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getCus_id() {
		return cus_id;
	}

	public void setCus_id(String cus_id) {
		this.cus_id = cus_id;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getWallet() {
		return wallet;
	}

	public void setWallet(String wallet) {
		this.wallet = wallet;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
