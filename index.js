const express = require('express');
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 3000;
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

app.post("/destination", (req, res) => 
{
	console.log(req.body);
	const { kota, provinsi, deskripsi} = req.body

	fs.readFile("./data/destination.json", (err, data) => 
	{
		if (err) res.send("Gagal membaca json")
		const destination = JSON.parse(data)
		const newDestination = 
		{
			id: destination.length+1111,
			kota: kota,
			provinsi: provinsi,
			deskripsi: deskripsi
		}
		destination.push(newDestination);

		fs.writeFile
		{
			"./data/destination.json", JSON.stringify(destination, '', 2),
			(err) => 
			{
				if (err) res.status(400).send("Gagal dalam memasukkan data");
				res.status(201).send
				({
					message: "sukses dalam menambahkan data",
					data: destination,
				});
			}
		};
	});
})

app.all("*", (req, res) =>
{
	res.status(404).send("404 not found")
})

app.listen(PORT, () => 
{
    console.log(`server nyala cek di http://localhost:${PORT}`)
})