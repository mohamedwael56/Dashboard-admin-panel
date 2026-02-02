const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

const getUsers = () => {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Register
exports.register = async (req, res) => {
  const { name, username,email, password, role, image, } = req.body;
 let users = getUsers();

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });


  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = {
    id: newId,
    name,
    username,
    email,
    password,
    role: role || "user",
    status: "active",
    registeredAt: new Date().toISOString().split("T")[0],
    image: image || "/images/default.jpg",
    
  };

  users.push(newUser);

saveUsers(users);

  const token = generateToken(newUser);
  res.json({ token, user: newUser });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
let users = getUsers();

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
  const { email, currentPassword,newPassword } = req.body;
let users = getUsers();

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  if (user.password !== currentPassword) { // أو لو hash: bcrypt.compare
    return res.status(400).json({ message: "Current password is incorrect" });
}

user.password = newPassword;
saveUsers(users);


  res.json({ message: "Password updated successfully" });
};
