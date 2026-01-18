const users = require("../data/users.data.js");
const jwt = require("jsonwebtoken");

// Helper function لعمل token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

exports.register = (req, res) => {
  const { name, email, role, image } = req.body;

  // نتأكد إن الايميل مش موجود
  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // نعمل id جديد
  const newId = users.length ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    name,
    email,
    role: role || "user",
    status: "active",
    registeredAt: new Date().toISOString().split("T")[0],
    image: image || "/images/default.jpg",
  };

  users.push(newUser);

  const token = generateToken(newUser);

  res.json({ token, user: newUser });
};

exports.login = (req, res) => {
  const { email } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const token = generateToken(user);

  res.json({ token, user });
};
