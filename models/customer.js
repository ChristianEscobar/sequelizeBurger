module.exports = function(sequelize, DataTypes) {
	const Customer = sequelize.define("Customer", {
		name: {
			type: DataTypes.STRING,
			validate: {
				len: [1],
				notEmpty: true,
				allowNull: false,
			}
		}
	});

	return Customer;
};