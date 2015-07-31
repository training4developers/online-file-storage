var
	program = require("commander"),
	http = require("http"),
	path = require("path"),
	webServer = require("./webServer"),
	fileUploadWebServer = require("./fileUploadWebServer"),
	fileUploadSocketServer = require("./fileUploadSocketServer"),
	notificationSocketServer = require("./notificationSocketServer"),
	mongoose = require("mongoose"),
	fileModel = require("./models/file.js"),
	folderModel = require("./models/folder.js"),
	app, options;
	
	
mongoose.connect("mongodb://localhost/OnlineFileStorage");

var folder = new Folder({
	name: "root"
});

folder.save(function(err) {
	
	if (err) {
		console.log(err);
		return;
	}
	
	console.log("folder saved...");
	
});



/*
	

program
	.version("0.0.1")
	.usage("[options]")
	.option("-c, --config [configFile]", "Use the specified configuration file [config/app.config.js].", "config/app.config.js")
	.parse(proces.argv);


options = require(program.config);
app = webServer(http, options);

fileUploadWebServer(app);
fileUploadSocketServer(http).;
notificationSocketServer(http);
startServer(http, app, options);
*/