const express = require('express');
const router = express.Router();
const alquilerControllers = require('../controllers/alquilerControllers');


router.get('/alquiler', alquilerControllers.getAlquiler);
router.post('/alquileres', alquilerControllers.createAlquiler);
router.get('/alquileraq',alquilerControllers.historial);



module.exports = router