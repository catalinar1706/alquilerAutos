const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoControllers'); 


router.post('/auto', autoController.crearAuto);
router.get('/autos', autoController.obtenerAuto);
router.get('/auto/:idA', autoController.verAutoId);
router.put('/auto/:id', autoController.actualizarAuto);
router.delete('/auto/:id', autoController.eliminarAuto);

module.exports = router;