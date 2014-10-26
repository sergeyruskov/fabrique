(function () {

var app = angular.module('thumbnail', ["template/productblock.html", "template/blockname.html", "template/content.html"]);

app.controller('contentController',['selectItem','$scope','$http', "$rootScope", function (selectItem, $scope, $http, $rootScope){

	successAnswer = function (data) {
		$scope.store = data;
		$scope.new = {
			header  : $scope.store.products.new.header,
			content : $scope.store.products.new.content
		};
		$scope.feature = {
			header  : $scope.store.products.feature.header,
			content : $scope.store.products.feature.content
		};
	};


//Пришлось вызывать функцию тут, так как для хорошо кастомизированного template(директивы ниже), нужно создать изолированный scope, использование transclude в разы усложняет задачу.
	$scope.addItem = function () {
		$rootScope.basketCount($rootScope.numberOfItems++);
	};

	//Получение данных из database.json, там товары. Важно помнить, что получаем мы их не сразу а JS работает ассинхронно, в результате мы получим данные после объявления переменных, соответственно переменные будут равны undefined, но можно сделать функцию в которую будут передаваться данные ответа, и уже в ней объявлять переменные.

	$http.get('js/database.json').success(function (data) {

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
		scope: {
			kindOfProduct: '='
		},
		templateUrl: 'template/blockname.html'
	};
})
.directive('content', function() {
	return { 
      	require: '^productBlock',
		restrict: 'E',
		replace: true,
		scope: {
			kindOfProduct: '=',
			currency: '=',
			addItem: '='
		},
		templateUrl: 'template/content.html'
	};
});



})();
