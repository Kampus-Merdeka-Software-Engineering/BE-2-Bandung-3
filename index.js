require("dotenv").config();
const express = require('express');
const app = express();
const fs = require("fs");
const cors = require("cors");
const {ContactRoutes} = require("./routes/contact.routes")
const {bookingRoutes} = require("./routes/booking.routes")
const PORT = process.env.PORT || 3000;
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

//contact routes
app.use("/contact", ContactRoutes);

//booking routes
app.use("/booking", bookingRoutes);

app.all("*", async (req, res) =>
{
	res.status(404).send("404 not found")
})


app.listen(PORT, "0.0.0.0", () => 
{
    console.log(`server nyala cek di http://localhost:${PORT}`)
})