const mongoose = require("mongoose");

function connectToDatabase() {
  
  mongoose
    .connect("mongodb+srv://mehashahul1982:meha1982@cluster0.6j03y3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Menu")
    .then((response) => console.log("Database connection successful"))
    .catch((e) => console.log(e));
}

module.exports = {
  connectToDatabase,
};