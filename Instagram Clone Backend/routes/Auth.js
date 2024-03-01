const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/sign-up", (req, res) => {
  const { name, userName, email, password } = req.body;
  if (!name || !userName || !email || !password) {
    return res.status(422).json({ error: "Please add all fields" });
  }
  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser) {
        return res.status(422).json({
          error: "User already exists with the same Username or Email",
        });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new USER({
          name,
          email,
          userName,
          password: hashedPassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "Registered successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
});

router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email and password" });
  }
  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) return res.status(422).json({ error: "Invalid Email" });
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          return res.status(200).json({ message: "Signed in successfully" });
        } else {
          return res.status(422).json({ error: "Invalid Password" });
        }
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
