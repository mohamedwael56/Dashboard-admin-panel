const express = require("express");
const router = express.Router();
const { deleteAccount, updateProfile } = require("../controllers/account.Controllers.js");

// إضافة multer
const multer = require("multer");
const path = require("path");

// مكان حفظ الصور
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // مجلد الصور
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage });

// روتات الحساب
router.delete("/delete-account", deleteAccount);

// تعديل البروفايل: الاسم، الإيميل، والصورة
router.post("/update-profile", upload.single("image"), updateProfile);

module.exports = router;
