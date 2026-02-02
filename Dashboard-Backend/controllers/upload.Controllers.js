const multer = require("multer");
const path = require("path");

// تحديد مكان حفظ الصور
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // مجلد الصور
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // اسم فريد
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
