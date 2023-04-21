const { Router } = require("express");
const router = Router();

const { getAllUsers } = require("../controllers/users.controller")


router.get("/ranking", getAllUsers);

module.exports = router;