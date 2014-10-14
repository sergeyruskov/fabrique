$(function() {

	var basketWrapper      = $(".basket-wrapper", '.header__first-row'),
		basketHeight       = $(".basket", ".basket-wrapper").outerHeight(),
		basketButton       = $('.basket__button', '.basket'),
		basketButtonIcon   = $('.basket__button__icon', '.basket__button'),
		basketNumberItems  = $(".basket__number-items", ".basket-items"),
		basketWordItems    = $("#basket__word-items", ".basket-items");

	//Set basket height

	if(basketHeight > 72) {
		basketWrapper.height(basketHeight);
	}

	// Checking items in basket section
	if(basketNumberItems.html() === '1' || basketNumberItems.html() === '0') {
		basketWordItems.text('item');
		basketNumberItems.css('color','#999');

		if ( basketNumberItems.html() === '1' ) {
			basketButtonIcon.css('color','#ad9');
			basketButton.css('border-color','#ad9');
		}

	} else {
		basketWordItems.text('items');
		basketButtonIcon.css('color','#ad9');
		basketButton.css('border-color','#ad9');
	}

});