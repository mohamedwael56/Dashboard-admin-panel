const sales = require("../data/sales.data.js");

const getSales = (req, res) => {
  res.json({
    success: true,
    data: sales,
  });
};

module.exports = {
  getSales,
};
