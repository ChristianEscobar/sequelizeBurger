const express = require("express");
const router = express.Router();
const db = require("../models");
const Burger = db.Burger;

// Add a new burger to the database
router.post("/", (req, res) => {
	Burger.create({
		burger_name: req.body.burgerDescription
	}).then((results) => {
		// Load the index view
		res.redirect("/");
	}).catch((error) => {
		res.status(500).send(error);
	});
});

// Get all burgers from the database
router.get("/", (req, res) => {
	Burger.findAll()
	.then((results) => {
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

// Update devoured flag for a specific burger based on the id
router.put("/:id", (req, res) => {
	Burger.findById(req.params.id)
	.then((burger) => {
		burger.update(req.body)
		.then((results) => {
			// Load the index view
			res.redirect("/");
		})
	}).catch((error) => {
		res.status(500).send(error);
	})
});

module.exports = router;