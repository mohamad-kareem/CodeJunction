const { Router } = require("express");
const router = Router();

const { login, register,forgetPasswordNotification,forgotpassword } = require("../controllers/auth.controller")

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password-notification",forgetPasswordNotification)

router.get("/reset-password/:id/:token",forgotpassword)

module.exports = router;