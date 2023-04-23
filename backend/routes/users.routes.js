const { Router } = require("express");
const router = Router();

const { getAllUsers,addCode,getCodeCountsByMonth,getUserCodes } = require("../controllers/users.controller");

router.get("/ranking", getAllUsers);
router.post("/:userId",addCode);
router.get("/",getCodeCountsByMonth);
router.get("/getcodes",getUserCodes);
module.exports = router;