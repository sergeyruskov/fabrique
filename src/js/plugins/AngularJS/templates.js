angular.module("template/productblock.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/productblock.html",
	"<div class=\'thumbnails-wrapper\'\n>" +
		"<h3> {{name.header}} </h3>\n" +
	"</div>"
    );
}]);