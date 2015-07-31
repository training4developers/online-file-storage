var
	mongoose = require("mongoose"),

	folderSchema = mongoose.Schema({
		name: String,
		parentFolderId: { type: ObjectId, ref: 'folder' },
		userId: { type: ObjectId, ref: 'user' }
	}),

	FileModel = mongoose.model("file", fileSchema);

module.exports = FileModel;
