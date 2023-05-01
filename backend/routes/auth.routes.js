const { Router } = require("express");
const router = Router();

const { login, register,forgetPasswordNotification } = require("../controllers/auth.controller")

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password-notification",forgetPasswordNotification)

module.exports = router;