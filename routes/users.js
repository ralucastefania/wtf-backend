var express = require("express");
var router = express.Router();
const { authenticate } = require("../middlewares/authentication");
const {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
  uploadMemory,
} = require("../controllers/userControllers");
const multer = require("multer");

//user routes
router
  .route("/")
  .get(authenticate, getUser)
  .post(addUser)
  .delete(authenticate, deleteUser)
  .put(authenticate, updateUser);
router.route("/login").post(loginUser);

module.exports = router;
