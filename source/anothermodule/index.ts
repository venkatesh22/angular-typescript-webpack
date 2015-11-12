
import * as angular from "angular";
import AnotherService from "./another.service.ts";

export default angular.module("anothermodule", [])
	.service(AnotherService.NAME, AnotherService)
	.name;