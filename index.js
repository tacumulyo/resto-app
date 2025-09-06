const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load config dari .env
dotenv.config({ path: "./.env" });

// Konek ke database
connectDB();

const app = express();
const port = 5000; // Kita pake port 5000 buat server

app.get("/", (req, res) => {
  res.send("Mantap, server backend jalan!");
});

app.listen(port, () => {
  console.log(`Server dengerin di http://localhost:${port}`);
});
