module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: dataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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
  User.associate = db => {};
  return User;
};
