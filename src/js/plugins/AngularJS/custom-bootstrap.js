(function(){

var app = angular.module('customBootstrap',['ngTouch']);

app.controller('carouselCtrl',['$scope', function ($scope) {
  	$scope.myInterval = 999000;
	this.slides = [
	{
	  image: 'images/slider/linen.jpg',
	  header: 'Claire aitch linen',
	  paragraph: 'Indulge yourself with the very best 100% cotton towels and linen by top UK designer Claire Aitch. Exclusive!'	
	},
	{
	  image: 'http://lorempixel.com/g/701/369'
	}
	];
}]);

})();