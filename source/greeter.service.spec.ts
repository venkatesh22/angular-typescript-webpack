
import * as angular from "angular";
import "angular-mocks/ngMock";

import AppModule from "./index.ts";
import GreeterService from "./greeter.service.ts";

describe(GreeterService.NAME, () => {
	beforeEach(angular.mock.module(AppModule));

	var GreeterService: GreeterService;
	beforeEach(angular.mock.inject((
		_GreeterService_) => {
		GreeterService = _GreeterService_;
	}));
	
	it("should do stuff", () => {
		expect(GreeterService.sayHi("Sam")).toBeDefined();
	});
});