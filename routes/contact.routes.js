const express = require("express");
const ContactRoutes = express.Router();
const {prisma} = require("../config/prisma");


ContactRoutes.get("/", async (req, res) =>
{
	const contact = await prisma.contact.findMany();
	res.status(200).send(contact);
});

ContactRoutes.get("/:id", async (req, res) => 
{
	const contact = await prisma.contact.findUnique
	({
		where: 
		{
			id: parseInt(req.params.id),
		},
	});
	if (!contact)
	{
		res.status(404).send({message: "Message Not send"})
	}
	else res.status(200).send(contact);
});

ContactRoutes.post("/", async (req, res) =>
{
	const {email, message} = req.body;
	const newBooking = await prisma.booking.create
	({
		data:
		{
			email: email,
			message: message
		},
	});
		res.status(201).send
		({
			message: "Message Sent",
			data: newContact,
		});
});

module.exports = {ContactRoutes}