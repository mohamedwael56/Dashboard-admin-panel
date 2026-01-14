const charts = {
  sales: {
    title: "Sales",
    total: 125000,
    percentChange: 12,
    currency: "EGP",
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [12000, 18000, 22000, 20000, 23000, 30000],
    },
  },

  orders: {
    title: "Orders",
    total: 860,
    percentChange: 8,
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [120, 140, 160, 130, 150, 160],
    },
  },

  products: {
    title: "Products",
    total: 320,
    percentChange: -5,
    categories: {
      labels: ["Electronics", "Clothing", "Home", "Beauty"],
      data: [120, 80, 70, 50],
    },
  },

  reviews: {
    title: "Reviews",
    total: 1450,
    percentChange: 20,
    ratings: {
      labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"],
      data: [800, 400, 150, 70, 30],
    },
  },

  users: {
    title: "Users",
    total: 5400,
    percentChange: 15,
    growth: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [500, 800, 1200, 1800, 2500, 3500],
    },
  },
};

module.exports = charts;
