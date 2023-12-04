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

app.get("/", async (req, res) =>
{
	res.send("Ini respon")
});

app.get("/booking/:id", async (req, res) => 
{
	const booking = await prisma.booking.findUnique
	({
		where: 
		{
			id: parseInt(req.params.id),
		},
	});
	if (!booking)
	{
		res.status(404).send({message: "Booking not found"})
	}
	else res.status(200).send(booking);
});

app.post("/booking", async (req, res) =>
{
	const {name, email, phone, date_destination, from, to, adult, children, airline} = req.body;
	const newBooking = await prisma.booking.create
	({
		data:
		{
			name: name,
			email: email,
			phone: parseInt(phone),
			date_destination: date_destination,
			from: from,
			to: to,
			adult: parseInt(adult),
			children: parseInt(children),
			airline: airline,
		},
	});
		res.status(201).send
		({
			message: "Booked",
			data: newBooking,
		});
});


app.all("*", async (req, res) =>
{
	res.status(404).send("404 not found")
})


app.listen(PORT, "0.0.0.0", () => 
{
    console.log(`server nyala cek di http://localhost:${PORT}`)
})