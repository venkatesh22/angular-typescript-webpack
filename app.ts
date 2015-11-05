

import Greeter = require("./greeter.ts");
import $ = require("jquery");

$(() => {
	$(document.body).html(new Greeter().greet("World"));
});

