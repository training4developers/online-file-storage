module.exports = function(http, options) {

	var
		express = require("express"),
		path = require("path"),
		app = express(),
		baseFolder;

	baseFolder = path.join(__dirname, options.rootFolder || "www");

	// not needed because all lib files are being compressed
	app.use("/libs", express.static(path.join(baseFolder, "libs")));

	app.use("/js", express.static(path.join(baseFolder, "js"), {
		setHeaders: function(res, filePath) {
			res.setHeader("Content-Type", "text/javascript");
			if (/.gz.js$/.test(filePath)) {
				res.setHeader("Content-Encoding", "gzip");
			}
		}
	}));

	app.use("/css", express.static(path.join(baseFolder, "css"), {
		setHeaders: function(res, filePath) {
			res.setHeader("Content-Type", "text/css");
			if (/.gz.css$/.test(filePath)) {
				res.setHeader("Content-Encoding", "gzip");
			}
		}
	}));

	app.use("/images", express.static(path.join(baseFolder, "images")));

	app.use("/", function(req, res) {
		res.sendFile(path.join(baseFolder, "index.html"));
	});

	http.createServer(app);

	/*
	.listen(options.port, function() {
		console.log("web server started on port " + options.port);
	});
	*/

	return app;

};
