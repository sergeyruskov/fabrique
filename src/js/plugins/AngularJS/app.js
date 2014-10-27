'use strict';
(function(){

var app = angular.module('app',['ui.bootstrap','customBootstrap','ngSanitize', 'thumbnail']);

//Currency active link
app.controller('activeCurrencyCtrl',["$rootScope", function ($rootScope) {

	$rootScope.currency = 1;

	this.setTrigger = function(activeCurrency){
		$rootScope.currency = activeCurrency;
	};

	this.activeClass = function(activeClass){
		return $rootScope.currency === activeClass;
	};

}]);


//Main menu active link
app.controller('activeMainMenuCtrl',function () {
	this.selectItem = 1;

    this.setTrigger = function(activeCurrency){
		this.selectItem = activeCurrency;
	};

    this.activeClass = function(activeClass){
		return this.selectItem === activeClass;
	};
});


//Basket

app.controller('basketCtrl',["$scope", "$rootScope", function ($scope, $rootScope) {
	$scope.itemString = 'item';
	$scope.borderColor = false;
	$scope.linkColor = false;


	$rootScope.numberOfItems = 0;
	$rootScope.basketCount = function (items) {
		if (items >= 0) {
			$scope.borderColor = true;
			$scope.linkColor = true;

			if (items >= 1) $scope.itemString = 'items';
		}
	};
}]);

app.controller('emailValidationCtrl', function(){
	this.emailSubmit = function  (emailValidBoolean){
		emailValidBoolean = alert("I'll remember");
	};

});
})();