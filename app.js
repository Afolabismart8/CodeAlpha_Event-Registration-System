require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const connectDB = require("./src/config/database");
connectDB();

const registrationRoutes = require("./src/routes/registrationRoute");
const authRoutes = require("./src/routes/authRoute");
const eventRoutes = require("./src/routes/eventRoute");



app.use("/api", registrationRoutes);
app.use("/api", authRoutes);
app.use("/api", eventRoutes);

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