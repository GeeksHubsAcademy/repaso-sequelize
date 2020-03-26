const router = require('express').Router();
const AppointmentController = require('../controllers/AppointmentController');

router.post('/',AppointmentController.insert);

module.exports = router;