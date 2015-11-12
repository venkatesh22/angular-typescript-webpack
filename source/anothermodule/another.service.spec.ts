
import * as angular from "angular";
import "angular-mocks/ngMock";

import AnotherModule from "./index.ts";
import AnotherService from "./another.service.ts";

describe(AnotherService.NAME, () => {
	beforeEach(angular.mock.module(AnotherModule));

	var AnotherService: AnotherService;
	beforeEach(angular.mock.inject((
		_AnotherService_) => {
		AnotherService = _AnotherService_;
	}));
	
	it("should do stuff", () => {
		expect(AnotherService.doStuff()).toBeDefined();
	});
});