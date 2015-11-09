
import GreeterController = require("./greeter.controller.ts");

declare var describe, beforeEach, it, expect;

describe("GreeterController", () => {

	var controller;
	beforeEach(() => {
		controller = new GreeterController();
	});
	
	it("should have a greeting", () => {
		expect(controller.greeting).toBeDefined();
	});
});