require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./src/config/database");
connectDB();

const errorMiddleware = require("./src/Middlewares/errorMiddleware");
app.use(errorMiddleware);

const registrationRoutes = require("./src/routes/registrationRoute");
const authRoutes = require("./src/routes/authRoute");
const eventRoutes = require("./src/routes/eventRoute");



app.use("/api", registrationRoutes);
app.use("/api", authRoutes);
app.use("/api", eventRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to the Event Registration System Api"
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});