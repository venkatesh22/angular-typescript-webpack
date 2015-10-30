import greeter = require("./greeter.ts");
import $ = require("jquery");

$(() => {
	$(document.body).html(greeter("World"));
});