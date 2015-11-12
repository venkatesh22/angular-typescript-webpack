

var x = 5;

import GreeterService from "./greeter.service.ts";

export default class GreeterController {
	static NAME: string = "GreeterController";
	
	greeting: string;
	
	/* @ngInject */
	constructor($http: ng.IHttpService, GreeterService: GreeterService) {
		$http.get<string>("https://api.github.com/users/angular")
			.then((response) => {
				this.greeting = response.data;
			});
	}
}
