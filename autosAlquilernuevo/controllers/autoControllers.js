const { auto } = require('../models');

exports.crearAuto = async (req, res) => {
    const { marca, modelo, ano, disponible } = req.body;
    try {
        const nuevoAuto = await auto.create({ marca, modelo, ano, disponible });
        res.json(nuevoAuto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al crear auto' });
    }
};

exports.obtenerAuto = async (req, res) => {
    try {
        const autos = await auto.findAll();
        res.json(autos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al obtener los autos' });
    }
};

exports.actualizarAuto = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, disponible } = req.body;
    try {
        let autoExistente = await auto.findByPk(id);
        if (autoExistente) {
            autoExistente.marca = marca;
            autoExistente.modelo = modelo;
            autoExistente.ano = ano;
            autoExistente.disponible = disponible;
            await autoExistente.save();
            res.json(autoExistente);
        } else {
            res.status(404).json({ mensaje: 'no se encontro' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'no se actualizo auto' });
    }
};

exports.eliminarAuto = async (req, res) => {
    const { id } = req.params;
    try {
        const autoAEliminar = await auto.findByPk(id);
        if (autoAEliminar) {
            await autoAEliminar.destroy();
            res.json({ mensaje: 'Auto eliminado' });
        } else {
            res.status(404).json({ mensaje: 'no se encontro auto' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'error al eliminar el auto' });
    }
};

exports.verAutoId = async (req, res) => {
    const { idA } = req.params;
    try {
        const autoEncontrado = await auto.findByPk(idA);
        if (autoEncontrado) {
            res.json(autoEncontrado);
        } else {
            res.status(404).json({ mensaje: 'no se encontro auto' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al mostrar el auto por ID' });
    }
};