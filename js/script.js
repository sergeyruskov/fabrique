$(function() {

	var basketWrapper     = $(".basket-wrapper", '.header__first-row'),
		basket            = $(".basket", ".basket-wrapper"),
		basketNumberItems = $(".basket__number-items", ".basket-items"),
		basketWordItems   = $("#basket__word-items", ".basket-items");

	//Set basket height

	if(basket.height() <= 45) {
		basketWrapper.height('5em');
	} else {
		basketWrapper.height(basket.height());
	}

	// Change item/items word in basket section
	if(basketNumberItems.html() === ('1' || '0')) {
		basketWordItems.text('item');
	} else {
		basketWordItems.text('items');
	}
});