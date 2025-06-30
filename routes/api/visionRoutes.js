const router = require('express').Router();
const visionController = require('../../controllers/visionController');

router.route('/').post(visionController.detectText);

module.exports = router;