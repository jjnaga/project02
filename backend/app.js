// TODO: https://goo.gl/FZEbYv
const express = require("express");

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	next();
});

app.post("/API", (req, res) => {
	console.log("This is working!");
	res.send(200, "Oh Hi Mark");
});

app.get("/API", (req, res) => {
	res.send(201, "I WORK");
});

app.listen(3001, () => console.log("Listening on Port 3001"));
