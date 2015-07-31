var
	mongoose = require("mongoose"),

	fileSchema = mongoose.Schema({
		name: String,
		size: { type:Number, min:0 },
		modified: Date,
		data: Buffer,
		folderId: { type: ObjectId, ref: 'folder' },
		userId: { type: ObjectId, ref: 'user' }
	}),

	FileModel = mongoose.model("file", fileSchema);

module.exports = FileModel;
