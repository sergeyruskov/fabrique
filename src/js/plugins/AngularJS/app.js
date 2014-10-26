(function(){

var app = angular.module('app',['ui.bootstrap','customBootstrap','ngSanitize', 'thumbnail']);

//Connector between activeCurrencyCtrl and store
app.service('selectItem',function(){
    this.selectItem = 1;
});


//Currency active link
app.controller('activeCurrencyCtrl',['selectItem',function (selectItem) {

	this.setTrigger = function(activeCurrency){
		selectItem.selectItem = activeCurrency;
	};

    this.activeClass = function(activeClass){
		return selectItem.selectItem === activeClass;
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

app.controller('basketCtrl',["selectItem","$scope", "$rootScope", function (selectItem, $scope, $rootScope) {
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

//ЗАКОНЧИЛ ТУТ
	$scope.www = function () {
		return $rootScope.numberOfItems === 0;
	};


}]);

app.controller('emailValidationCtrl', function(){
	this.emailSubmit = function  (emailValidBoolean){
		emailValidBoolean = alert("I'll remember");
	};

});
})();