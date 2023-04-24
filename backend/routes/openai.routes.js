const { Router } = require('express');
const router = Router();

const { authMiddleware } = require("../midllewares/auth.middleware");
const { analyzeCode,adviceCode} = require('../openai');

router.post('/analyze',authMiddleware, analyzeCode);

router.post('/advice',authMiddleware, adviceCode);

module.exports = router;