
import GreeterController = require("./greeter.controller.ts");

export = function($routeProvider: angular.route.IRouteProvider) {
	$routeProvider
		.when("/", {
			controller: GreeterController,
			controllerAs: "vm",
			template: require<string>("./greeter.html") 
		})
		.otherwise({ redirectTo: "/" });
}


