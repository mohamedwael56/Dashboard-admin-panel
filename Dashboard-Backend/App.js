const express = require('express');
const cors = require('cors');
// middleware للErrors
const notFound = require('./middleware/notFound.middleware.js');
const errorHandler = require('./middleware/error.middleware.js');
const usersRoute = require('./routes/users.routes.js');
const ordersRoute = require('./routes/orders.routes.js'); // 👈 مهم تعمل require هنا
const salesRoute = require('./routes/sales.routes.js');
const reviewsRoute = require('./routes/reviews.routes.js');
const productsRoute = require('./routes/products.routes.js');
const settingsRoute = require('./routes/settings.routes.js');
const chartsRoute = require('./routes/charts.routes.js');
const authRoutes = require("./routes/auth.routes.js");
const accountRoutes = require("./routes/accountRoutes.js");
const path = require("path");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/users', usersRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/products', productsRoute);
app.use('/api/sales', salesRoute);
app.use('/api/reviews', reviewsRoute);
app.use('/api/settings', settingsRoute);
app.use('/api/charts', chartsRoute);
app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


app.use(notFound);

module.exports = app;