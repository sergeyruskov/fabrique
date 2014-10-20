(function(){

var app = angular.module('app',['ui.bootstrap','customBootstrap','ngSanitize']);

app.controller('fabrique', function(){
	this.basketUserName = userName;
});


//Currency active link
app.controller('activeCurrencyCtrl',function () {

	this.selectItem = 1;

    this.setTrigger = function(activeCurrency){
		this.selectItem = activeCurrency;
	};

    this.activeClass = function(activeClass){
		return this.selectItem === activeClass;
	};
});


//Main menu active link
app.controller('activeMainMenuCtrl',['$scope', function ($scope) {
	this.selectItem = 1;

    this.setTrigger = function(activeCurrency){
		this.selectItem = activeCurrency;
	};

    this.activeClass = function(activeClass){
		return this.selectItem === activeClass;
	};
}]);


//Basket
//ng-click="basket.addItem()" - добавить на кнопку Add To Basket
app.controller('basketCtrl',function () {

	this.numberOfItems = 0;
	this.itemString = 'item';
	this.borderColor = false;
	this.linkColor = false;

	this.addItem = function() {
		this.numberOfItems++;

		if (this.numberOfItems > 0) {

			this.borderColor = true;
			this.linkColor = true;

			if (this.numberOfItems > 1) {
				this.itemString = 'items';
			}
		}
	};
});

app.controller('emailValidationCtrl', function(){
	this.emailSubmit = function  (emailValidBoolead){
		if(emailValidBoolead === true){
			alert("I'll remember");
		}
	};
	

	this.emailForm = function (){
		console.log(this.emailInput);
	};

	// this.emailInput = function (){
	// 	this.emailInputBoolean = this.emailForm.$valid;
	// };

});

})();


