const { validationResult } = require("express-validator");

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  // console.log(result.isEmpty()); // this isEmpty function gaves result false , when your name filed is blank;

  if (!result.isEmpty()) {
    return res.status(404).json({ errors: result.array() });
  }

  next();
};
