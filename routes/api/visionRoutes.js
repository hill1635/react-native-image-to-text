const { Router } = require('express');
const { detectText } = require('../../controllers/visionController.js');

const router = Router();

router.route('/').post(detectText);

module.exports = router;