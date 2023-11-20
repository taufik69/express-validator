const express = require("express");
const { BodyItemvalidation } = require("./Validator/bodyitemValidaton");
const { mainController } = require("./Controller/check.controller");
const { validatorResult } = require("./Validator/validatorResult");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", BodyItemvalidation(), validatorResult, mainController);
app.listen(3000, (req, res) => {
  console.log(`port running on http://localhost:3000`);
});
