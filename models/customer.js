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

	// 1 to many association to Burgers model
	Customer.hasMany(sequelize.models.Burger);

	return Customer;
};