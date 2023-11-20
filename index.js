const express = require("express");
const { body, validationResult, matchedData } = require("express-validator");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post(
  "/",
  body("name").notEmpty(),
  body("email").notEmpty(),
  (req, res, next) => {
    const result = validationResult(req);
    // console.log(result.isEmpty()); // this isEmpty function gaves result false , when your name filed is blank;

    if (!result.isEmpty()) {
      return res.status(404).json({ errors: result.array() });
    }

    
    const validData = matchedData(req);
    res.send(validData);
  },

  (req, res) => {
    const { name, email, password } = req.body;
    res.status(200).json({
      message: "user created sucessfully",
      name,
      email,
      password,
    });
  }
);
app.listen(3000, (req, res) => {
  console.log(`port running on http://localhost:3000`);
});
