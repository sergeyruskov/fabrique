(function(){

var app = angular.module('customBootstrap',['ngTouch']);

app.controller('carouselCtrl', function ($scope) {
  	$scope.myInterval = 999000;
	this.slides = [
	{
	  image: 'images/slider/linen.jpg',
	  header: 'Claire aitch linen',
	  paragraph: 'Indulge yourself with the very best 100% cotton towels and<br>linen by top UK designer<br>Claire Aitch.<br>Exclusive!'	
	},
	{
	  image: 'http://lorempixel.com/g/701/369'
	}
	];
});

})();