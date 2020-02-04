const db = require('./index');
module.exports = (sequelize, dataTypes) => {
	const Post = sequelize.define(
		'Post',
		{
			title: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			itemName: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			category: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			offerPrice: {
				type: dataTypes.STRING,
				allowNull: true,
			},
			rating: {
				type: dataTypes.STRING,
				allowNull: true,
			},
		},
		{
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci', // 한글 + 이모지(mb4)
		},
	);
	Post.associate = db => {
		db.Post.belongsTo(db.User);
		db.Post.hasMany(db.Comment);
		db.Post.belongsToMany(db.Hashtag, {
			through: 'PostHashtag',
		});
	};
	return Post;
};
