const router = require('express').Router();
const PhysicianController = require('../controllers/PhysicianController');

router.post('/',PhysicianController.insert)

module.exports = router;