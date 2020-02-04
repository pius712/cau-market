const db = require('./index');
module.exports = (sequelize, dataTypes) => {
	const Comment = sequelize.define('Comment', {
		content: {
			type: dataTypes.TEXT,
			allowNull: false,
		},
	});
	Comment.associate = db => {
		db.Comment.belongsTo(db.User);
		db.Comment.belongsTo(db.Post);
	};
	return Comment;
};
