const reviews = require("../data/reviews.data.js");

const getReviews = (req, res) => {
  res.json({
    success: true,
    data: reviews,
  });
};

module.exports = {
  getReviews,
};
