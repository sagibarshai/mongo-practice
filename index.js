const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express(); // init express app
const User = require("./modles/User");
const signupRouter = require("./routes/signup");
app.use(bodyParser.json()); // beacuse transfrom data inside http is using json(string) so we add a middlewear to parse all data that we recives
app.use(cors());

app.get("/", async (req, res) => {
     const users = await User.find({});
     return res.status(200).json(users);
});
app.use(signupRouter);

const start = async () => {
     try {
          await mongoose.connect(
               "mongodb+srv://sagibarshai:hellohello@cluster0.93tsfwl.mongodb.net/?retryWrites=true&w=majority"
          );
          console.log("succsessfuly connected to mongodb");
          app.listen(4000, () => console.log("server listen on port 4000"));
     } catch (err) {
          console.log(err);
     }
};

start();
