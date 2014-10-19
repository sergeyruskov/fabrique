(function(){

var app = angular.module('customBootstrap',['ngTouch']);

app.controller('carouselCtrl',['$scope', function ($scope) {
  	$scope.myInterval = 20000;
	this.slides = [

		{
		  image: 'images/slider/linen.jpg',
		  alt: 'something',
		  header: 'Claire aitch linen',
		  paragraph: 'Indulge yourself with the very best 100% cotton towels and linen by top <br> UK designer Claire Aitch. Exclusive!'
		},

		{
		  image: 'http://lorempixel.com/g/700/370',
		  alt: 'something',
		  header: 'Claire aitch linen',
		  paragraph: 'Indulge yourself with the very best 100% cotton towels and linen by top UK designer Claire Aitch. Exclusive!'	
		}
		
	];
}]);

})();