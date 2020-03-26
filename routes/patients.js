const router = require('express').Router();
const PatientController = require('../controllers/PatientController');

router.post('/',PatientController.insert)

module.exports = router;