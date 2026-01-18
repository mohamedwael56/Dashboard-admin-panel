const users = require("../data/users.data.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");


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
  let users = [];
  if (fs.existsSync(usersFile)) {
    const data = fs.readFileSync(usersFile);
    users = JSON.parse(data);
  }
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });


  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = {
    id: newId,
    name,
    email,
    password,
    role: role || "user",
    status: "active",
    registeredAt: new Date().toISOString().split("T")[0],
    image: image || "/images/default.jpg",
  };

  users.push(newUser);

    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  const token = generateToken(newUser);
  res.json({ token, user: newUser });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  let users = [];
  if (fs.existsSync(usersFile)) {
    const data = fs.readFileSync(usersFile);
    users = JSON.parse(data);
  }

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

user.password = newPassword;

  res.json({ message: "Password updated successfully" });
};
