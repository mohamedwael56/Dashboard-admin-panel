const products = require("../data/products.data.js");

const getProducts = (req, res) => {
  res.json({
    success: true,
    data: products,
  });
};

module.exports = {
    getProducts,
};
