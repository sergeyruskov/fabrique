angular.module("template/productblock.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/productblock.html",
	"<div class=\"thumbnails-wrapper\" ng-transclude>\n" +
	"</div>"
    );
}]);

angular.module("template/blockname.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("template/blockname.html",
		"<h3 class=\"important-info\">{{new.header}}</h3>"
	);
}]);

angular.module("template/content.html", []).run(["$templateCache", function ($templateCache) {
	$templateCache.put("template/content.html",
		"<div class=\"col-sm-3\" data-ng-repeat=\"content in new.content\">\n" +
		"	<div class=\"thumbnail\">\n" +
		"		<a href=\"#\"><img class=\"thumbnail__img\" data-ng-src=\"{{content.image}}\" style=\"height:130px;width:220px\" alt=\"Clare Aitch Bath Sheets\"></a>\n" +
		"		<div class=\"caption\">\n" +
		"			<h4 class=\"thumbnail__product-name-and-price\">\n" +
		"				<a href=\"#\" class=\"thumbnail__product-name-and-price__links--product-name\">{{content.productName}}</a>\n" +
		"				<a href=\"#\" class=\"thumbnail__product-name-and-price__links--price\">\n" +
		"					<span ng-show=\"currency.GBP()\">{{content.price | currency : '&#163;'}}</span>\n" +
		"					<span ng-show=\"currency.USD()\">{{content.price * 1.61722 | currency : '$'}}</span>\n" +
		"					<span ng-show=\"currency.EUR()\">{{content.price * 1.26226975 | currency : '&#128;'}}</span>\n" +
		"				</a>\n" +
		"		</h4>\n" +
		"	    <p class=\"thumbnail__text\">{{content.text}}</p>\n" +
		"	    <p class=\"thumbnail__button-group\">\n" +
		"	        <a class=\"thumbnail__buttons\" role=\"button\">View</a>\n" +
		"	        <a class=\"thumbnail__buttons\" role=\"button\" ng-click=\"basket.addItem()\">Add to basket</a>\n" +
		"	    </p>\n" +
		"	  </div>\n" +
		"	</div>\n" +
		"</div>"
	);
}]);