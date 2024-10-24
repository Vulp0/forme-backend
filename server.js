const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./models");

app.use(express.json());
app.use(cors());

db.sequelize.sync().then(() => {
    app.listen(process.env, () => {
        console.log("Server now running on port " + process.env.PORT + "...");
    });
});