$(function() {

	var OnlineFileStorageApp = Marionette.Application.extend({
		initialize: function(options) {
			console.dir(options);
		}
	});

	var app = new OnlineFileStorageApp({container: "#onlineFileStorageApp"});

	app.on("start", function() {
		console.log("app starting...");
	});

	app.start();

});
