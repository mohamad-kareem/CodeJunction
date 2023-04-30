const { Router } = require("express");
const router = Router();

const { adminMiddleware } = require("../midllewares/admin.middleware");
const { authMiddleware } = require("../midllewares/auth.middleware");

const { getDailyUsageValue } = require("../controllers/statistics.controller");

router.get("/getAiDailyUsageValue",authMiddleware,adminMiddleware,getDailyUsageValue);

module.exports = router;