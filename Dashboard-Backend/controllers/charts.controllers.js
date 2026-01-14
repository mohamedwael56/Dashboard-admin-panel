const charts = require("../data/charts.data.js");

const getCharts = (req, res) => {
  res.json({
    success: true,
    data: charts,
  });
};

module.exports = { getCharts };
