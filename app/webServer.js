module.exports = function(options) {

	var
		express = require("express"),
		path = require("path"),
		bodyParser = require("body-parser"),
		cookieParser = require("cookie-parser"),
		multer = require("multer"),
		app = express(),
		baseFolder = path.join(__dirname, options.rootFolder || "www");

	// not needed because all lib files are being compressed
	//app.use("/libs", express.static(path.join(baseFolder, "libs")));

	app.use("/api", bodyParser.json());
	app.use("/api", bodyParser.urlencoded({ extended: false }));

	app.use("/api", multer({
		dest: path.join(__dirname, "uploads"),
		rename: function(fieldName, fileName) {
			return fileName;
		}
	}));

	app.use(cookieParser());

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

	return app;
};
