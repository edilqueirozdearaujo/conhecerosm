//Try to translate the page to the english if browser not is portuguese
var userLang = navigator.language || navigator.userLanguage;

if ( userLang != 'pt-BR' && userLang != 'pt' ) {		
	$('.txtBtnMake').text('Learn more!');
	$('.txtBtnBack').text('Back');
	$('.txtBtnMP1').text('Mapillary Photo 1');
	$('.txtBtnMP2').text('Mapillary Photo 2');
	$('.ImgHeader').text('Time travel with Mapillary Streetview');
	


}

            	            	 
