const express = require("express");
const bookingRoutes = express.Router();
const {prisma} = require("../config/prisma");

// get all booking
bookingRoutes.get("/", async (req, res) =>
{
	const booking = await prisma.booking.findMany();
	res.status(200).send(booking);
});

// get booking
bookingRoutes.get("/:id", async (req, res) => 
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

// post booking
bookingRoutes.post("/", async (req, res) =>
{
	const {name, email, phone, date_destination, from, to, adult, children, airline} = req.body;
	const newBooking = await prisma.booking.create
	({
		data:
		{
			name: name,
			email: email,
			phone: phone,
			date_destination: date_destination,
			from: from,
			to: to,
			adult: adult,
			children: children,
			airline: airline,
		},
	});
		res.status(201).send
		({
			message: "Booked",
			data: newBooking,
		});
});

module.exports = {bookingRoutes}