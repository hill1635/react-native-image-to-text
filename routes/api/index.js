const { Router } = require('express');
const visionRoutes = require('./visionRoutes.js');

const router = Router();
router.use('/vision', visionRoutes);

module.exports = router;