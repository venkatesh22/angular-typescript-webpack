
import GreeterService from "./greeter.service.ts";

class GreeterDirectiveController {
	name: string;
	greeting: string;
	
	constructor(GreeterService: GreeterService) {
		this.greeting = GreeterService.sayHi(this.name);
	}
}

export default class GreeterDirective {
	static NAME = "greeter";
	
	static factory(): ng.IDirective {
		return {
			scope: true,
			bindToController: {
				name: "@"
			},
			controller: GreeterDirectiveController,
			controllerAs: "vm",
			template: require("./greeter.directive.html")
		};
	}
}
