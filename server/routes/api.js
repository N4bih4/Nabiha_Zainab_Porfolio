const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/about', apiController.getAbout);
router.get('/skills', apiController.getSkills);
router.get('/projects', apiController.getProjects);
router.get('/education', apiController.getEducation);
router.post('/contact', apiController.submitContact);
router.post('/newsletter', apiController.subscribeNewsletter);

module.exports = router;
