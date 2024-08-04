const mongoose = require("mongoose");

function connectToDatabase() {
  
  mongoose
    .connect("mongodb://localhost:27017/capstone")
    .then((response) => console.log("Database connection successful,Menu"))
    .catch((e) => console.log(e));
}

module.exports = {
  connectToDatabase,
};