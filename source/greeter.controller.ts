

export default class GreeterController {
	static NAME: string = "GreeterController";
	
	greeting: string;
	
	/* @ngInject */
	constructor(private $http: ng.IHttpService) {
		$http.get<string>("https://api.github.com/users/angular")
			.then((response) => {
				this.greeting = response.data;
			});
	}
}
