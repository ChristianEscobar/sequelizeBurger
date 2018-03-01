const express = require("express");
const router = express.Router();
const db = require("../models");
const Burger = db.Burger;

// Add a new burger to the database
router.post("/", (req, res) => {
	Burger.create({
		burger_name: req.body.burgerDescription
	}).then((results) => {
		res.status(200).json(results);
	}).catch((error) => {
		res.status(500).send(error);
	});
});

// Get all burgers from the database
router.get("/", (req, res) => {
	Burger.findAll()
	.then((results) => {
		res.status(200).json(results);
	}).catch((error) => {
		res.status(500).send(error);
	});
});

/*
router.get("/", (req, res) => {
	burger.selectAll()
		.then((result) => {
			const burgersObj = {
				burgers: result[0]
			};
			res.render("index", burgersObj);
		}).catch((error) => {
			console.error(error);
		});
});

router.post("/", (req, res) => {
	burger.insertOne(req.body.burgerDescription, false)
		.then((result) => {
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});

router.put("/:id", (req, res) => {
	burger.updateOne(req.params.id)
		.then((result) => {
			res.redirect("/");
		}).catch((error) => {
			console.error(error);
		});
});
*/

module.exports = router;