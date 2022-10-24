const express = require("express");
const User = require("../modles/User");
const signupRouter = express.Router();
signupRouter.post("/api/users/signup", async (req, res) => {
     // creating hard coded user (later it will be from req.body)
     //  const { email, password } = req.body;
     const user = new User({
          email: "hello@gmail.com",
          password: "hello@gmail.com",
     });
     try {
          await user.save(); // saving data inside mongodb
     } catch (err) {
          console.log(err); //catching errors
          return res
               .status(500) // 500+ it's server error and beacuse db is server so we send here 500
               .send({ message: "problem with store data on our db" });
     }
     res.status(200).json(user); // defualt case: return the user (shoud be change to hased password inside db and shoud send back only id and email )
     //  shoud also send as cookie of jwt
});
module.exports = signupRouter;
