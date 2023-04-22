const { Router } = require("express");
const router = Router();

const { getAllUsers,addCode } = require("../controllers/users.controller");

router.get("/ranking", getAllUsers);
router.post("/:userId",addCode);
module.exports = router;