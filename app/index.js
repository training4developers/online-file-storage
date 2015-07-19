var
	webServer = require("./webServer");

var app = webServer({
	rootFolder: "www",
	port: 8080
});
