/// <reference path="jquery/jquery.d.ts" />

interface Require {
	(string): void;
	context(string, boolean, RegEx): any;
}

declare var require: Require;