const { Router } = require('express');
const router = Router();

const { authMiddleware } = require("../midllewares/auth.middleware");
const { analyzeCode,adviceCode, autoCorrect} = require('../controllers/openai.controller');

router.post('/analyze',authMiddleware, analyzeCode);

router.post('/advice',authMiddleware, adviceCode);

router.post('/autocorrect',authMiddleware,autoCorrect)

module.exports = router;