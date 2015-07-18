module.exports = function(options) {

	var
		http = require("http"),
		express = require("express"),
		path = require("path"),
		app = express(),
		baseFolder, folderParts = [];

	if (options.rootFolder) {
		folderParts.push(options.rootFolder);
	}

	baseFolder = path.join(options.rootFolder || )







	app.use("/js", express.static(__dirname + "/www/js"));
	app.use("/css", express.static(__dirname + "/www/css"));
	app.use("/images", express.static(__dirname + "/www/images"));

	app.use("/", function(req, res) {

		res.sendFile(__dirname + "www/index.html");

	});



};
