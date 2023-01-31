const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose").set('strictQuery', false);
require("dotenv").config();

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => {
    app.listen(6000, () => {
      console.log("DB connected and server is running on port 6000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
