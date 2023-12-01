const express = require('express');
const app = express();
const fs = require("fs");

const cors = require("cors");

const PORT = 3000;

app.use(cors());

app.get("/", function (req, res) 
{
	response.send("Ini respon")
});

app.get("/destination", (req, res) => 
{
	// ambil data JSON dari /data/destination.JSON
	fs.readFile('./data/destination.json', (error, data) => 
	{
		if (error) res.send("Gagal dalam pembacaan data")
		const destination = JSON.parse(data)
		res.status(200).send(destination);
	})

})

app.all("*", (req, res) =>
{
	res.status(404).send("404 not found")
})

app.listen(PORT, () => 
{
    console.log(`server nyala cek di http://localhost:${PORT}`)
})