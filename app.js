var greeter = require("./greeter.ts");
var $ = require("jquery");
$(function () {
    $(document.body).html(greeter("World"));
});
