const settings = require("../data/settings.data.js");

const getSettings = (req, res) => {
  res.json({
    success: true,
    data: settings,
  });
};

module.exports = {
  getSettings,
};
