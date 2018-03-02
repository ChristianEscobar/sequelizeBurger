module.exports = function(sequelize, DataTypes) {
	const Customer = sequelize.define("Customer", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});

	return Customer;
};