const mongoose = require("mongoose")

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/DeadlyDomain?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
  console.log("Server Connected");
}).catch((err) => {
  console.log("err");
});

module.exports = mongoose