const db = require('./index');
module.exports = (sequelize, dataTypes) => {
	const Hashtag = sequelize.define(
		'Hashtag',
		{
			name: {
				type: dataTypes.STRING,
				allowNull: false,
			},
		},
		{
			charset: 'utf8',
			collate: 'utf8_general_ci',
		},
	);
	Hashtag.associate = db => {
		db.Hashtag.belongsToMany(db.Post, {
			through: 'PostHahtag',
		});
	};
	return Hashtag;
};
