
import GreeterController from "./greeter.controller.ts";

/* @ngInject */
export default function RouteConfig($routeProvider: angular.route.IRouteProvider) {
	$routeProvider
		.when("/", {
			controller: GreeterController.NAME,
			controllerAs: "vm",
			template: require<string>("./greeter.html") 
		})
		.otherwise({ redirectTo: "/" });
}


