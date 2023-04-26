const { Router } = require("express");
const router = Router();

const { authMiddleware } = require("../midllewares/auth.middleware");
const { getAllUsers,addCode,updateCode,getCodeCountsByMonth,getUserCodes, updateProfile, getUserInfo} = require("../controllers/users.controller");



router.get("/allusers", getAllUsers);

router.get("/grapghdata",authMiddleware,getCodeCountsByMonth);
router.get("/usercodes",authMiddleware,getUserCodes);
router.get("/userInfo",authMiddleware,getUserInfo);

router.post("/createfolder",authMiddleware,addCode);

router.put("/updateCode",authMiddleware,updateCode);
router.put("/updateProfile",authMiddleware,updateProfile);


module.exports = router;