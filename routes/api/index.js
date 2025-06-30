const router = require('express').Router();
const visionRoutes = require('./visionRoutes.js');

router.use('/vision', visionRoutes);

module.exports = router;