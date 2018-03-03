const express = require("express");
const router = express.Router();
const db = require("../models");
const Burger = db.Burger;
const Customer = db.Customer;

// Add a new burger to the database
router.post("/", (req, res) => {
	Burger.create({
		burgerName: req.body.burgerDescription
	}).then((results) => {
		// Load the index view
		res.redirect("/");
	}).catch((error) => {
		res.status(500).send(error);
	});
});

// Get all burgers from the database
router.get("/", (req, res) => {
	Burger.findAll({
		order: ["burgerName"],
		include: [ Customer ]
	}).then((results) => {
		// Build burgers object for Handlebars index view
		const burgersObj = {
			burgers: results
		}

		// Load the index view
		res.render("index", burgersObj);
	}).catch((error) => {
		res.status(500).send(error);
	});
});

// Update devoured flag  to true for a specific burger based on the id
router.put("/:id", (req, res) => {

	// Extract the customer, if it does not exists create it
	Customer.findOrCreate({
		where: {
			name: req.body.userName
		}
	}).spread((customer, created) => {
		// Update the burger based on the id provided
		Burger.update({
			devoured: true,
			CustomerId: customer.id
		},{
			where: {
				id: req.params.id
			}
		}).then((results) => {
			res.redirect("/");
		}).catch((error) => {
			res.status(500).send(results);
		});
	});
});

module.exports = router;