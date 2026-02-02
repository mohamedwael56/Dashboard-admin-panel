const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

const getUsers = () => {
  if (!fs.existsSync(usersFile)) return [];
  return JSON.parse(fs.readFileSync(usersFile, "utf-8"));
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};

// Delete Account
exports.deleteAccount = (req, res) => {
  const { userId } = req.body;

  let users = getUsers();
  const userIndex = users.findIndex(u => u.id == userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const user = users[userIndex];

  // حذف الصورة لو مش default
  if (user.image && user.image !== "/images/default.jpg") {
    const imagePath = path.join(__dirname, "../", user.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
  }

  // حذف المستخدم
  users.splice(userIndex, 1);
  saveUsers(users);

  res.json({ message: "Account deleted successfully" });
};
