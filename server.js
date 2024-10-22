const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

app.listen(process.env, () => {
    console.log("Server now running on port " + process.env.PORT + "...");
});