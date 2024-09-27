const express = require('express')
const router = express.Router()
const clienteControllers = require('../controllers/clienteControllers')

router.post('/clientes',clienteControllers.createCliente);
router.get('/clientes', clienteControllers.getcliente);

router.put('/clientes/:id', clienteControllers.actualizarcliente);
router.delete('/clientes/:id', clienteControllers.eliminarCliente);
router.get('/clientes/:idf', clienteControllers.verclienteId);

module.exports = router