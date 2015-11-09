

export class GreeterController {
	static NAME: string = "GreeterController";
	
	greeting: string;
	
	constructor(private $http: ng.IHttpService) {
		$http.get<string>("http://localhost:10009/make?text=Hi")
			.then((response) => {
				this.greeting = response.data;
			});
	}
}
