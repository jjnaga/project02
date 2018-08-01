// TODO: https://goo.gl/FZEbYv
const express = require("express");
const MongoClient = require("mongodb").MongoClient; // eslint-disable-line

const app = express();

// TODO: Get rid of lol
const MONGO_URL = "mongodb://user:password12@ds259241.mlab.com:59241/carhub";
let db;

MongoClient.connect(
	MONGO_URL,
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}

		// Save database object from callback for reuse
		db = client.db();

		console.log("Database Connection Ready");

		app.listen(3001, () => {
			console.log("App now running on port 3001");
		});
	},
);

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

/**
 * '/'
 * Default route.
 *
 * GET: Retrieves companies and their respective models.
 */

// TODO: Is this the best way to do this halfway through 2018? It's clean tho
// ngl
app.get("/", async (req, res) => {
	let companies;
	let models;

	try {
		await db
			.collection("models")
			.distinct("company")
			.then(data => {
				companies = data;
			});
		await db
			.collection("models")
			.distinct("model")
			.then(data => {
				models = data;
			});
	} catch {
		err => console.log(err);
	} finally {
		const data = {
			companies,
			models,
		};
		res.status(200).send(data);
	}

	db.collection("models")
		.distinct("company")
		.then(data => {
			models = data;
		});
});

/*
 * /create
 *
 * POST: Sends req.body to server for creation of new hub.
 */
app.post("/create", (req, res) => {
	const object = {
		company: req.body.company,
		model: req.body.model,
		yearStarted: req.body.yearStarted,
		yearEnded: req.body.yearEnded,
		specs: {
			horsepower: req.body.horsepower,
			torque: req.body.torque,
			weight: req.body.weight,
			zeroToSixty: req.body.zeroToSixty,
			quarterMile: req.body.quarterMile,
		},
	};

	console.log(`Creating new Hub: ${req.body.company} ${req.body.model}`);
	db.collection("models").insertOne(object);
	res.status(200).send("I DID IT!");
});
