const { Router } = require('express');
const router = Router();

const { authMiddleware } = require("../midllewares/auth.middleware");

const { analyzeCode} = require('../openai');
router.post('/analyze',authMiddleware, analyzeCode);


module.exports = router;