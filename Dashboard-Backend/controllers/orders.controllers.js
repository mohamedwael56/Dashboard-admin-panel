const orders = require("../data/orders.data.js");

const getOrders = (req, res) => {
  res.json({
    success: true,
    data: orders,
  });
};

module.exports = {
  getOrders,
};
