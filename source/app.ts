
require("./styles.scss");
var tests = require.context(".", true, /something/);
tests.keys().forEach(tests);

import Greeter = require("./greeter.ts");
import $ = require("jquery");

$(() => {
	$(document.body).html(new Greeter().greet("World"));
});

