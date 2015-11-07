interface IRequire {
	<T>(string): T;
	context(string, boolean, RegEx): any;
}

declare var require: IRequire;