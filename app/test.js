module.exports = function() {

	var path = require("path");

	return {

		getRequirePath: function(moduleFilePath) {
			var relativeModuleFilePath = path.relative(process.cwd(), moduleFilePath);
			relativeModuleFilePathParts = relativeModuleFilePath.split(path.sep);
			return "./" + relativeModuleFilePathParts.join("/");
		}

	}

}
