const users = require("../data/users.data.js");

const getUsers = (req, res) => {
  res.json({
    success: true,
    data: users,
  });
};

module.exports = {getUsers};
