const { Router } = require("express");
const router = Router();

const { getAllUsers,addCode,updateCode,getCodeCountsByMonth,getUserCodes} = require("../controllers/users.controller");

const { authMiddleware } = require("../midllewares/auth.middleware");

router.get("/allusers", getAllUsers);
router.get("/grapghdata",authMiddleware,getCodeCountsByMonth);
router.get("/usercodes",authMiddleware,getUserCodes);

router.post("/createfolder",authMiddleware,addCode);

router.put("/updateCode",authMiddleware,updateCode);


module.exports = router;