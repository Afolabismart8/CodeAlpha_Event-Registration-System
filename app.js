require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
//connecting to database
const connectDB = require("./src/config/database");
connectDB();
//error handling middleware
const errorMiddleware = require("./src/Middlewares/errorMiddleware");
app.use(errorMiddleware);

//importing routes
const registrationRoutes = require("./src/routes/registrationRoute");
const authRoutes = require("./src/routes/authRoute");
const eventRoutes = require("./src/routes/eventRoute");

app.use("/api", registrationRoutes);
app.use("/api", authRoutes);
app.use("/api", eventRoutes);

//swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to the Event Registration System Api"
    });
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});