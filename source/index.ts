
import "imports?jQuery=jquery!bootstrap-sass";

import * as angular from "angular";
import * as AngularRoute from "angular-route";

import RouteConfig from "./routes.ts";
import GreeterController from "./greeter.controller.ts";
import GreeterService from "./greeter.service.ts";
import GreeterDirective from "./greeter.directive.ts";

import AnotherModule from "./anothermodule";

export default angular.module("app", [
	AngularRoute,
	AnotherModule])
	.config(RouteConfig)
	.controller(GreeterController.NAME, GreeterController)
	.service(GreeterService.NAME, GreeterService)
	.directive(GreeterDirective.NAME, GreeterDirective.factory)
	.name;




