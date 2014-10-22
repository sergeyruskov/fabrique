(function () {

var app = angular.module('thumbnail', []);

app.controller('contentController',['selectItem','$scope', function (selectItem, $scope) {

	this.currency = {
		GBP: function () {
			return selectItem.selectItem === 1;
		},

		USD: function () {
			return selectItem.selectItem === 2;
		},

		EUR: function () {
			return selectItem.selectItem === 3;
		}
	};

	this.newProductsBlock = {
		header: newProducts.header,
		content: newProducts.content
	};

}]);

app.directive('newproducts', function () {
	return {
		restrict: 'E',
		templateUrl: 'js/plugins/templates/new-products.html'
		};
});


// app.directive('featured-products',function () {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'js/plugins/templates/featured-products.html',
// 		controller: ['theService', function (theService) {
// 			this.products = featuredProductsBlock.header;
// 			this.newProductsHeader = featuredProductsBlock.content;
// 		}],
// 		controllerAs: 'featured'
// 	};
// });

// var featuredProductsBlock = {
// 	header: 'Featured products',
// 	content: [
// 	{
// 		image      : 'images/featured-products/img1.jpg',
// 		productName : 'Royale curtains',
// 		price       : '159.99',
// 		text        : "A range of colours compliment what have to be the thickest curtains we have ever seen. As soft as velvet and available in a range of sizes."
// 	},
// 	{
// 		image      : 'images/featured-products/img2.jpg',
// 		productName : 'Claire Aitch Zebra Rug',
// 		price       : '129.99',
// 		text        : "Contemporary, 3 inch deep sheeps wool rug by designer Claire Aitch. Hessian backed for extra long life and stain resistant."
// 	},
// 	{
// 		image      : 'images/featured-products/img3.jpg',
// 		productName : 'Real pine wood flooring',
// 		price       : '19.99',
// 		text        : "Save 50% on this real English Pine wood flooring while stocks last. Was £39.98 now £19.99 per square metre."
// 	},
// 	{
// 		image      : 'images/featured-products/img4.jpg',
// 		productName : 'Modern flowers bed set',
// 		price       : '89.99',
// 		text        : "Wrap yourself in the true epitome of luxurious 100% cotton towels and linen by the respected UK designer Claire Aitch."
// 	}
// 	]
// };




var newProducts = {
	header: 'New product',
	content: [
		{
			image      : 'images/new-products/img1.jpg',
			productName : 'Claire aitch bath sheets',
			price       : '29.99',
			text        : "Wrap yourself in the true epitome of luxurious 100% cotton towels and linen by the respected UK designer Claire Aitch"
		},
		{
			image      : 'images/new-products/img2.jpg',
			productName : 'Chocolate cushion set',
			price       : '36.99',
			text        : 'Who can resist the temptation and comfort of this trilogy of chocolate coloured cushions? Deep filled for ultimate comfort and so frilly!',
		},
		{
			image      : 'images/new-products/img3.jpg',
			productName : 'Kay lea modern bed set',
			price       : '59.99',
			text        : 'For fans of minimalism we have the classic black and white bed set by new designer Kay Lea. 2 pillow cases, quilt cover and sheet.'
		},
		{
			image      : 'images/new-products/img4.jpg',
			productName : 'Ali Baba Rug & Cushion',
			price       : '259.99',
			text        : 'A  taste of the exotic with this hand made Turkish rug and matching cushion in stain resistant, softened 100% cotton.'
		}

	]
};

// var newProductsContent = [
// 			{
// 				images      : 'images/new-products/img1.jpg',
// 				productName : 'Claire aitch bath sheets',
// 				price       : '29.99',
// 				text        : "Wrap yourself in the true epitome of luxurious 100% cotton towels and linen by the respected UK designer Claire Aitch"
// 			},
// 			{
// 				images      : 'images/new-products/img2.jpg',
// 				productName : 'Chocolate cushion set',
// 				price       : '36.99',
// 				text        : 'Who can resist the temptation and comfort of this trilogy of chocolate coloured cushions? Deep filled for ultimate comfort and so frilly!',
// 			},
// 			{
// 				images      : 'images/new-products/img3.jpg',
// 				productName : 'Kay lea modern bed set',
// 				price       : '59.99',
// 				text        : 'For fans of minimalism we have the classic black and white bed set by new designer Kay Lea. 2 pillow cases, quilt cover and sheet.'
// 			},
// 			{
// 				images      : 'images/new-products/img4.jpg',
// 				productName : 'Ali Baba Rug & Cushion',
// 				price       : '259.99',
// 				text        : 'A  taste of the exotic with this hand made Turkish rug and matching cushion in stain resistant, softened 100% cotton.'
// 			}
// 		];
	
})();
