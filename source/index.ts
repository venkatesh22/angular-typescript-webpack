
require("./styles.scss");
var somethings = require.context(".", true, /something/);
somethings.keys().forEach(somethings);

import angular = require("angular");
import angularRoute = require("angular-route");

import {RouteConfig} from "./routes.ts";
import {GreeterController} from "./greeter.controller.ts";

export default angular.module("app", [angularRoute])
	.config(RouteConfig)
	.controller(GreeterController.NAME, GreeterController)
	.name
;

angular.element(document).ready(() => {
	angular.bootstrap(document, ["app"]);
});

