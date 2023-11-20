exports.mainController = (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).json({
    message: "user created sucessfully",
    name,
    email,
    password,
  });
};
