const express = require("express")
const app = express();
const cors = require("cors")

const port = 5000;
const UserRouter = require("./Routers/userRouter")
const ContactRouter = require("./Routers/contactRouter")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use("/user", UserRouter);
app.use("/contact", ContactRouter);

app.listen(port,() => {
    console.log("Server Started");
})