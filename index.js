const express = require('express');
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 3000;
const {prisma} = require("./config/prisma")

 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const loggerMiddleware = (req, res, next) => {
	const now = new Date();
	const formattedTime = now.toLocaleDateString();
	const method = req.method;
	const url = req.url;
	const status = res.statusCode;
	console.log(`[${formattedTime}] ${method} ${url} - ${status}`);
	next();
};

app.use(loggerMiddleware);

app.get("/", function (req, res) 
{
	response.send("Ini respon")
});

app.get("/destination/id", async (req, res) => 
{
	const destination = await prisma.destination.findUnique({
		where:
		{
			id: parseInt(req.params.id),
		},
	});
	if (!destination.length) res.status(404).send("destination");
	else res.status(200).send(destination);
});

app.get("/destination", async (req, res) => 
{
	const destination = await prisma.destination.findMany();
	res.status(200).send(destination)
});

app.all("*", (req, res) =>
{
	res.status(404).send("404 not found")
})

app.listen(PORT, "0.0.0.0", () => 
{
    console.log(`server nyala cek di http://localhost:${PORT}`)
})