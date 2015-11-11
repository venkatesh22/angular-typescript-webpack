
require("./styles.scss");

import * as angular from "angular";
import * as angularRoute from "angular-route";

import RouteConfig from "./routes.ts";
import GreeterController from "./greeter.controller.ts";

export default angular.module("app", [angularRoute])
	.config(RouteConfig)
	.controller(GreeterController.NAME, GreeterController)
	.name
;




