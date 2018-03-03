module.exports = function(sequelize, DataTypes) {
	const Burger = sequelize.define("Burger", {
		burgerName: {
			type: DataTypes.STRING,

			validate: {
				len: [1],
				notEmpty: true,
				allowNull: false
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});

	return Burger;
};

