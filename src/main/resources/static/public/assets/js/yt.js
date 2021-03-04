JotForm.init(function(){
if (window.JotForm && JotForm.accessible) $('input_5').setAttribute('tabindex',0);
	JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.newPaymentUI = true;
      JotForm.alterTexts(undefined);
	JotForm.clearFieldOnHide="disable";
      setTimeout(function() {
          JotForm.initMultipleUploads();
      }, 2);
	JotForm.submitError="jumpToFirstError";
    /*INIT-END*/
	});

 

