const { Router } = require("express");
const router = Router();

const { adminMiddleware } = require("../midllewares/admin.middleware");
const { authMiddleware } = require("../midllewares/auth.middleware");

const { getDailyUsageValue, getAllUsersNumber } = require("../controllers/statistics.controller");

router.get("/getAiDailyUsageValue",authMiddleware,adminMiddleware,getDailyUsageValue);
router.get("/getAllUsersNumber",authMiddleware,adminMiddleware,getAllUsersNumber);

module.exports = router;