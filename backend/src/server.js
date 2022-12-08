const express = require('express');
const app = express();
const cors = require('cors');
// DOTENV enables our server reads our secret codes existing in oour .env file
require("dotenv").config();

// Database
const connectDatabase = require("./config/dataBase");

// Middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000

const startServer = () => {
    try {
        connectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

startServer();