var
	program = require("commander-plus"),
	http = require("http"),
	path = require("path"),
	webServer = require("./webServer"),
	fileUploadWebServer = require("./fileUploadWebServer"),
	fileUploadSocketServer = require("./fileUploadSocketServer"),
	notificationSocketServer = require("./notificationSocketServer"),
	app, options;

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
