const express = require("express")
const app = express();
const cors = require("cors")

const port = 5000;
const UserRouter = require("./Routers/userRouter")
const ContactRouter = require("./Routers/contactRouter")
const PlanRouter = require("./Routers/planRouter")
const feedbackRouter = require("./Routers/feedbackrouter")
const reviewRouter = require("./Routers/reviewRouter")
const utilRouter = require("./Routers/utilRouter")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"]
}))

app.use("/user", UserRouter);
app.use("/contact", ContactRouter);
app.use("/plan", PlanRouter)
app.use("/feedback", feedbackRouter);
app.use("/review", reviewRouter);
app.use("/util", utilRouter);

app.use(express.static('./static/uploads'));

app.listen(port, () => {
    console.log("Server Started");
})