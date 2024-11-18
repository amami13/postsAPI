// we used dotenv and I left it here if we wont use the .env file we can delete later :)
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const app = express();

mongoose
  .connect(
    "mongodb://localhost:27017/postsAPI",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

app.use(
  session({
    secret: "bvfhefbiuefheiufh", // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use files in modules directory they need to be imported in the start of the file
// app.use("/", forgetPasswordRoutes);


// set the port the app will run in
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

