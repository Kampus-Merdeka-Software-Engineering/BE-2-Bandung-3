const express = require("express");
const contactRoutes = express.Router();
const {prisma} = require("../config/prisma");

// get all contact
contactRoutes.get("/", async (req, res) =>
{
	const contact = await prisma.contact.findMany();
	res.status(200).send(contact);
});

// get contact
contactRoutes.get("/:id", async (req, res) => 
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
		res.status(404).send({message: "There is no contact"})
	}
	else res.status(200).send(contact);
});

// post contact
contactRoutes.post("/", async (req, res) =>
{
	const {email, message} = req.body;
	const newContact = await prisma.contact.create;
	({
		data:
		{
			email: email,
			message: message,
		},
	});
		res.status(201).send
		({
			message: "Message Sent",
			data: newContact,
		});
});

module.exports = {contactRoutes}