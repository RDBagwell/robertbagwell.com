const path = require('path');
const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/index');

router.get('/', homeControllers.getHome);
router.get('/eight_ball', homeControllers.getEightBall);
router.get('/rock_paper_scissors', homeControllers.getRPS);
router.get('/gallery', homeControllers.getGallery);
router.get('/collage_creator', homeControllers.getCollage);

module.exports = router;