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
			console.log("App now running on port 4000");
		});
	},
);

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

/*
 * /create
 *
 * POST: Sends data to server for creation of new hub.
 */
app.post("/create", (req, res) => {
	console.log(`Creating new Hub: ${req.body.model}`);
	db.collection("models").insertOne(req.body);
	res.status(200).send("I DID IT!");
});
