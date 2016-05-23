//Try to translate the page to the english if browser not is portuguese
var userLang = navigator.language || navigator.userLanguage;

if ( userLang != 'pt-BR' && userLang != 'pt' ) {		
	$('.txtBtnMake').text('Make your slide');
	$('.txtBtnBack').text('Back');
	$('.txtBtnMP1').text('Mapillary Photo 1');
	$('.txtBtnMP2').text('Mapillary Photo 2');
	$('.txtFeitoComMJS').text('powered with');
	


}

            	            	 
