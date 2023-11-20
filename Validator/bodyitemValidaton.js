const { check } = require("express-validator");

exports.BodyItemvalidation = () => [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .trim()
    .isLength({ min: 5, max: 16 })
    .withMessage("Name minimum value is 5 and maximum value in 16"),

  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .isEmail()
    .custom((value) => {
      // Use a custom regular expression to check for a more specific email pattern
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
      // console.log(emailRegex.test(emailRegex)); // giving result false , when not match te email
      if (!emailRegex.test(value)) {
        throw new Error("Invalid email format");
      }
      return true;
    }),
];
