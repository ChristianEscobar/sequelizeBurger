module.exports = function(sequelize, DataTypes) {
	const Burger = sequelize.define("Burger", {
		burgerName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
				notEmpty: true
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

