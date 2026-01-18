const users = require("../data/users.data.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function لعمل token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Register
exports.register = async (req, res) => {
  const { name, email, password, role, image } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = {
    id: newId,
    name,
    email,
    password: hashedPassword,
    role: role || "user",
    status: "active",
    registeredAt: new Date().toISOString().split("T")[0],
    image: image || "/images/default.jpg",
  };

  users.push(newUser);

  const token = generateToken(newUser);
  res.json({ token, user: newUser });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "Invalid email or password" });

  if (user.password !== password) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = generateToken(user);
  res.json({ token, user });
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;

  res.json({ message: "Password updated successfully" });
};
