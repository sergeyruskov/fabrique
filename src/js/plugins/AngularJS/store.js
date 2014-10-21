(function () {

var app = angular.module('thumbnail', []);

app.directive('newproducts',function () {
	return {
		restrict: 'E',
		templateUrl: 'js/plugins/templates/store.html',
		controller: ['theService', function (theService) {
							this.products = newProductsThumbnail;
							this.newProductsHeader = 'New product';
				
							this.hidePrice = function () {
								return theService.selectItem === 1;
							};
						}],
		controllerAs: 'store'
	};
});



var newProductsHeader = 'New product';

var newProductsThumbnail = [
			{
				images      : 'images/new-products/img1.jpg',
				productName : 'Claire aitch bath sheets',
				price       : '29.99',
				text        : "Wrap yourself in the true epitome of luxurious 100% cotton towels and linen by the respected UK designer Claire Aitch"
			},
			{
				images      : 'images/new-products/img2.jpg',
				productName : 'Chocolate cushion set',
				price       : '36.99',
				text        : 'Who can resist the temptation and comfort of this trilogy of chocolate coloured cushions? Deep filled for ultimate comfort and so frilly!',
			},
			{
				images      : 'images/new-products/img3.jpg',
				productName : 'Kay lea modern bed set',
				price       : '59.99',
				text        : 'For fans of minimalism we have the classic black and white bed set by new designer Kay Lea. 2 pillow cases, quilt cover and sheet.'
			},
			{
				images      : 'images/new-products/img4.jpg',
				productName : 'Ali Baba Rug & Cushion',
				price       : '259.99',
				text        : 'A  taste of the exotic with this hand made Turkish rug and matching cushion in stain resistant, softened 100% cotton.'
			}
		];
	
})();
