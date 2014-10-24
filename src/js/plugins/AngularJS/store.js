(function () {

var app = angular.module('thumbnail', ["template/productblock.html", "template/blockname.html", "template/content.html"]);

app.controller('contentController',['selectItem','$scope','$http', function (selectItem, $scope, $http) {

	successAnswer = function (data) {
		store = data;
		$scope.new = {
			header : store.products.new.header,
			content : store.products.new.content
		};
	};

	//Получение данных из database.json, там товары. Важно помнить, что получаем мы их не сразу а JS работает ассинхронно, в результате мы получим данные после объявления переменных, соответственно переменные будут равны undefined, но можно сделать функцию в которую будут передаваться данные ответа, и уже в ней объявлять переменные.

	$http.get('js/database.json').success(function (data, status, headers, config) {

		successAnswer(data);

	});

	
	//Переключать валюты, связан с selectItem из app.js
	$scope.currency = {
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

}]);

								//ДИРЕКТИВЫ

app.directive('productBlock', function() {
	return { 
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'template/productblock.html'
	};
})
.directive('blockName', function() {
	return { 
      	require: '^productBlock',
		restrict: 'E',
		replace: true,
		templateUrl: 'template/blockname.html'
	};
})
.directive('content', function() {
	return { 
      	require: '^productBlock',
		restrict: 'E',
		replace: true,
		// scope: {
		// 	kindOfProduct: '=',
		// 	currency: '='
		// },
		templateUrl: 'template/content.html'
	};
});






})();

// app.directive('newproducts', function () {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'js/plugins/templates/new-products.html'
// 	};
// });


// app.directive('product', function () {
// 	return {
// 		restrict: 'E',
// 		scope: {
// 			name: '=info'
// 		},
// 		templateUrl: 'template/productblock.html'
// 	};
// });





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


