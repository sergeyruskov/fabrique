angular.module("template/productblock.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/productblock.html",
	"<div class=\"thumbnails-wrapper\" ng-transclude>\n" +
	"</div>"
    );
}]);

angular.module("template/blockname.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("template/blockname.html",
		"<h3 class=\"important-info--product\">{{kindOfProduct.header}}</h3>"
	);
}]);

angular.module("template/content.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("template/content.html",
		"<div  class=\"thumbnail-wrapper-product\" data-ng-repeat=\"thumbnail in kindOfProduct.content\">\n" +
		"	<div class=\"thumbnail\" ng-class=\"{pullRight:$last, marginAuto:$middle, pullLeft:$index % 4 === 0 }\">\n" +
		"		<a href=\"#\"><img class=\"thumbnail__img\" data-ng-src=\"{{thumbnail.image}}\" alt=\"Clare Aitch Bath Sheets\"></a>\n" +
		"		<div class=\"caption\">\n" +
		"			<h4 class=\"thumbnail__product-name-and-price\">\n" +
		"				<a href=\"#\" class=\"thumbnail__product-name-and-price__links--product-name\">{{thumbnail.productName}}</a>\n" +
		"				<a href=\"#\" class=\"thumbnail__product-name-and-price__links--price\">\n" +
		"					<span ng-show=\"currency.GBP()\">{{thumbnail.price | currency : '&#163;'}}</span>\n" +
		"					<span ng-show=\"currency.USD()\">{{thumbnail.price * 1.61722 | currency : '$'}}</span>\n" +
		"					<span ng-show=\"currency.EUR()\">{{thumbnail.price * 1.26226975 | currency : '&#128;'}}</span>\n" +
		"				</a>\n" +
		"		</h4>\n" +
		"	    <p class=\"thumbnail__text\">{{thumbnail.text}}</p>\n" +
		"	    <p class=\"thumbnail__button-group\">\n" +
		"	        <a class=\"thumbnail__buttons\" role=\"button\">View</a>\n" +
		"	        <a class=\"thumbnail__buttons\" role=\"button\" ng-click=\"addItem()\">Add to basket</a>\n" +
		"	    </p>\n" +
		"	  </div>\n" +
		"	</div>\n" +
		"</div>"
	);
}]);