const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler');
// DOTENV enables our server reads our secret codes existing in oour .env file
require("dotenv").config();
require("express-async-errors")

// Database
const connectDatabase = require("./config/dataBase");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandler);

// Router
const authenticationRouter = require("./router/authRoutes");


app.use("/api/auth", authenticationRouter)

const PORT = process.env.PORT || 5000;


const startServer = () => {
    try {
        connectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}


startServer();

app.listen(PORT,() => console.log("serving on port ${port}"));

