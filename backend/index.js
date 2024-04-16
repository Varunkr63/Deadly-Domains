const express = require("express")
const app = express();
const cors = require("cors")

const port = 5000;
const UserRouter = require("./Routers/userRouter")
const ContactRouter = require("./Routers/contactRouter")
const aboutRouter = require("./Routers/aboutRouter")
const feedbackRouter = require("./Routers/feedbackrouter")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use("/user", UserRouter);
app.use("/contact", ContactRouter);
app.use("/about",aboutRouter);
app.use("/feedback",feedbackRouter);

app.listen(port,() => {
    console.log("Server Started");
})