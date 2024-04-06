const mongoose = require("mongoose")

const url = "mongodb+srv://111varun:Varun123@cluster0.eopt5le.mongodb.net/DeadlyDomain?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
  console.log("Server Connected");
}).catch((err) => {
  console.log("err");
});

module.exports = mongoose