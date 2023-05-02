const { Router } = require("express");
const router = Router();

const { authMiddleware } = require("../midllewares/auth.middleware");
const { getAllUsers,addCode,updateCode,getCodeCountsByMonth,getUserCodes,removeCode, updateProfile, getUserInfo,updateImageUrl,getUserImage,updateDailyUsageValue} = require("../controllers/users.controller");

router.get("/allusers", getAllUsers);

router.get("/grapghdata",authMiddleware,getCodeCountsByMonth);
router.get("/usercodes",authMiddleware,getUserCodes);
router.get("/userInfo",authMiddleware,getUserInfo);
router.get("/getUserImage",authMiddleware,getUserImage);

router.post("/createfolder",authMiddleware,addCode);

router.put("/updateCode",authMiddleware,updateCode);
router.put("/updateProfile",authMiddleware,updateProfile);
router.put("/updateUserImage",authMiddleware,updateImageUrl);
router.put("/updateDailyValue",authMiddleware,updateDailyUsageValue);

router.delete("/code/:id/",authMiddleware,removeCode)


module.exports = router;