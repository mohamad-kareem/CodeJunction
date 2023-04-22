const { Router } = require("express");
const router = Router();

const { getAllUsers,addCode,getCodeCountsByMonth } = require("../controllers/users.controller");

router.get("/ranking", getAllUsers);
router.post("/:userId",addCode);
router.get("/:userId",getCodeCountsByMonth);

module.exports = router;