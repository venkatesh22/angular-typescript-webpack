
import angular = require("angular");
import angularMocks = require("angular-mocks/ngMock");

import app from "./index.ts";
import {GreeterController} from "./greeter.controller.ts";

describe("GreeterController", () => {
	beforeEach(angular.mock.module(app));

	var $controller: ng.IControllerService;
	var $httpBackend: ng.IHttpBackendService;
	beforeEach(angular.mock.inject((
		_$controller_,
		_$httpBackend_) => {
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
	}));
	
	var controller: GreeterController;
	beforeEach(() => {
		controller = $controller<GreeterController>(GreeterController.NAME);
		
		$httpBackend.whenGET(/make/)
			.respond("fake response");
	});
	
	it("should have a greeting", () => {
		$httpBackend.flush();
		expect(controller.greeting).toBeDefined();
	});
});