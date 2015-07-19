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

	baseFolder = path.join(__dirname, options.rootFolder || "www");

	app.use("/libs", express.static(path.join(baseFolder, "libs")));
	app.use("/js", express.static(path.join(baseFolder, "js")));
	app.use("/css", express.static(path.join(baseFolder, "css")));
	app.use("/images", express.static(path.join(baseFolder, "images")));

	app.use("/", function(req, res) {
		res.sendFile(path.join(baseFolder, "index.html"));
	});

	http.createServer(app).listen(options.port, function() {
		console.log("web server started on port " + options.port);
	});

	return app;

};
