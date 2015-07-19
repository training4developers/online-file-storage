module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		}
	});

	grunt.registerTask("webServer", "start web server", function() {

		var
			webServer = require("./app/webServer"),
			webServerConfig = grunt.config("webServer");

		this.async();
		webServer(webServerConfig);

	});

	grunt.registerTask("default", "start development environment", ["webServer"]);

};
