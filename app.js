require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const connectDB = require("./src/config/database");
connectDB();

console.log("DB IMPORT:", connectDB);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "App is running live"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});