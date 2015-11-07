
require("./styles.scss");
var tests = require.context(".", true, /something/);
tests.keys().forEach(tests);

import angular = require("angular");
import angularRoute = require("angular-route");

import routes = require("./routes.ts");
import GreeterController = require("./greeter.controller.ts");
angular.module("app", [angularRoute])
	.config(routes)
	//.controller("GreeterController", GreeterController)
;

angular.element(document).ready(() => {
	angular.bootstrap(document, ["app"]);
});

/*
import $ = require("jquery");
$(() => {
	$(document.body).html("World");
});
*/
