module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define(
		'User',
		{
			userId: {
				type: dataTypes.STRING,
				allowNull: false,
				// primaryKey: true,
				unique: true,
			},
			password: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			studentId: {
				type: dataTypes.STRING,
				allowNull: false,
			},
			nickname: {
				type: dataTypes.STRING,
				allowNull: false,
			},
		},
		{
			charset: 'utf8',
			collate: 'utf8_general_ci',
			// timestamps: false, false 안하면 created_at, updated_at 자동으로 추가된다.
		},
	);
	User.associate = db => {
		db.User.hasMany(db.Post);
		db.User.hasMany(db.Comment);
	};
	return User;
};
// CREATE TABLE IF NOT EXISTS `Posts`
// (`id` INTEGER NOT NULL auto_increment ,
// `title` VARCHAR(255) NOT NULL,
// `itemName` VARCHAR(255) NOT NULL,
// `description` VARCHAR(255) NOT NULL,
// `category` VARCHAR(255) NOT NULL,
// `offerPrice` VARCHAR(255),
// `rating` VARCHAR(255),
// `createdAt` DATETIME NOT NULL,
// `updatedAt` DATETIME NOT NULL,
// `UserId` VARCHAR(255),
// PRIMARY KEY (`id`),
// FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;
