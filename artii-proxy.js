

var express = require("express");
var api = express();
var cors = require("cors");

var request = require("request");

api.use(cors());

api.get("/make", function (req, res) {
	request.get("http://artii.herokuapp.com/make?text=" + req.query.text).pipe(res);
});

api.listen(10009);
