const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const controller = require("../controllers/watchListConroller");

router.post("/", auth.check, controller.add);
router.delete("/:movie", auth.check, controller.delete);
router.get("/", auth.check, controller.list);

module.exports = router;
