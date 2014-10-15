
var items = {name: 'Sergey'}; // наверное позднее лучше перенести в другой модуль

var userName = {name: 'Sergey'}; 

var app = angular.module('app', ['ngSanitize']).controller('fabriqueController', 
	['$scope', 
	function($scope){

		this.basketUserName = userName;

		// $scope.myHTML = 'item';
		// $scope.counter = 0;

		// $scope.change = function() {

		// 	$scope.counter++;

		// if ( $scope.counter !== 0 ) {

			// $scope.buyColor = 'active-color';
			// $scope.activeBorder = 'active-border';

		// 	if ( $scope.counter > 1 ){
		// 		$scope.myHTML = 'items';
		// 	}
		// }
	// };

	}]);































// $(function() {

// 	var basketWrapper      = $(".basket-wrapper", '.header__first-row'),
// 		basketHeight       = $(".basket", ".basket-wrapper").outerHeight(),
// 		basketButton       = $('.basket__button', '.basket'),
// 		basketButtonIcon   = $('.basket__button__icon', '.basket__button'),
// 		basketNumberItems  = $(".basket__number-items", ".basket-items"),
// 		basketWordItems    = $("#basket__word-items", ".basket-items");

	//Set basket height

	// if(basketHeight > 72) {
	// 	basketWrapper.height(basketHeight);
	// }

	// Checking items in basket section
	// if(basketNumberItems.html() === '1' || basketNumberItems.html() === '0') {
	// 	basketWordItems.text('item');
	// 	basketNumberItems.css('color','#999');

	// 	if ( basketNumberItems.html() === '1' ) {
	// 		basketButtonIcon.css('color','#ad9');
	// 		basketButton.css('border-color','#ad9');
	// 	}

	// } else {
	// 	basketWordItems.text('items');
	// 	basketButtonIcon.css('color','#ad9');
	// 	basketButton.css('border-color','#ad9');
	// }

// });


	 // $scope.count = 0;
	// console.log($scope.counter);
	// $scope.changeClass = function() {
	  // if ($scope.counter === 3)
	  //  console.log(1);
	  // else
	  //   $scope.class = "red";
	// };

	// $('.search-form__button').bind('click', function () {

 //      $scope.counter = 0;
 //      $scope.change = function() {
 //        $scope.counter++;
 //      };
	// });

// если не работает посмотреть как указать несколько агрументов в директиве  ng-click

