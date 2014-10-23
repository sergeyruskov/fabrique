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

});
})();