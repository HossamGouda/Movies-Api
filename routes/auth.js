const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const controller = require("../controllers/authController");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.get("/me", auth.check, controller.me);

module.exports = router;
